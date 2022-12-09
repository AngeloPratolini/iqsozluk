import hashlib
import os

from contextlib import suppress
from smtplib import SMTPException

from django.conf import settings as django_settings
from django.contrib import messages as notifications
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView
from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.utils.translation import gettext as _
from django.views.generic import CreateView, FormView, View, TemplateView, DetailView, ListView

from dictionary.backends.sessions.utils import flush_all_sessions
from dictionary.conf import settings
from dictionary.forms.auth import ChangeEmailForm, LoginForm, ResendEmailForm, SignUpForm, TerminateAccountForm
from dictionary.models import AccountTerminationQueue, Author, BackUp, UserVerification
from dictionary.utils import get_theme_from_cookie, time_threshold
from dictionary.utils.email import send_email_confirmation
from dictionary.utils.mixins import PasswordConfirmMixin
from dictionary.models.author import Quiz, Answer, Question, Result


class Login(LoginView):
    form_class = LoginForm
    template_name = "dictionary/registration/login.html"

    def form_valid(self, form):
        remember_me = form.cleaned_data.get("remember_me", False)
        session_timeout = 86400 * 30 if remember_me else 86400

        # Session expiration is computed from the last time the session
        # was modified. If you are modifying the session, keep this in mind.
        self.request.session.set_expiry(session_timeout)

        # Check if the user cancels account termination.
        with suppress(AccountTerminationQueue.DoesNotExist):
            AccountTerminationQueue.objects.get(author=form.get_user()).delete()
            notifications.info(
                self.request, _("welcome back. your account has been reactivated."), extra_tags="persistent"
            )

        notifications.info(self.request, _("başarı ile giriş yaptınız"))
        return super().form_valid(form)


class Logout(LogoutView):
    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            notifications.info(request, _("fevkalade bir çıkış yaptınız"))
        return super().dispatch(request)


class SignUp(FormView):
    form_class = SignUpForm
    template_name = "dictionary/registration/signup.html"

    def form_valid(self, form):
        user = form.save(commit=False)
        user.username = form.cleaned_data.get("username").lower()
        user.birth_date = form.cleaned_data.get("birth_date")
        user.gender = form.cleaned_data.get("gender")
        user.theme = get_theme_from_cookie(self.request)

        if settings.DISABLE_NOVICE_QUEUE:
            # Make the user an actual author
            user.application_status = Author.Status.APPROVED
            user.is_novice = False

        user.save()
        send_email_confirmation(user, user.email)
        notifications.info(
            self.request,
            _(
                "a confirmation link has been sent to your e-mail address. by following"
                " this link you can activate and login into your account."
            ),
        )
        return redirect("quiz", id=user.id, quiz_id=1)


def quiz(request, id, quiz_id):
    if request.method == 'POST':
        print(request.POST)
        questions=Question.objects.all().filter(quiz_id=quiz_id)
        answers=[]
        for i in questions:
            for y in Answer.objects.all().filter(question_id=i):
                answers.append(y)
        score=0
        wrong=0
        correct=0
        total=0
        for a in answers:
            total+=1
            print(request.POST.get(a.correct))
            print(a.correct)
            if a.correct == request.POST.get(a.correct):
                score+=10
                correct+=1
            else:
                wrong+=1
        percent = score/(total*10) *100
        author = Author.objects.get(id=id)
        author.test_score += score
        author.test_taken += 1
        author.save()
        context = {
            'score':score,
            'time': request.POST.get('timer'),
            'correct':correct,
            'wrong':wrong,
            'percent':percent,
            'total':total
        }
        return HttpResponse(f"<h1>{request.POST.get(answers[0])}</h1>")
    else:
        questions=Question.objects.all().filter(quiz_id=quiz_id)
        answers = []
        for i in questions:
            for y in Answer.objects.all().filter(question_id=i):
                answers.append(y)
        context = {
            'questions':questions,
            'answers':answers
        }
        return render(request, "dictionary/testing/quiz.html", context)


class ConfirmEmail(View):
    success = False
    template_name = "dictionary/registration/email/confirmation_result.html"

    def get(self, request, token):
        try:
            token_hashed = hashlib.blake2b(token.bytes).hexdigest()
            verification_object = UserVerification.objects.get(
                verification_token=token_hashed, expiration_date__gte=time_threshold(hours=24)
            )
        except UserVerification.DoesNotExist:
            return self.render_to_response()

        author = verification_object.author

        if not author.is_active:
            author.is_active = True
            author.save()
        else:
            author.email = verification_object.new_email
            author.save()

        self.success = True
        UserVerification.objects.filter(author=author).delete()
        return self.render_to_response()

    def render_to_response(self):
        return render(self.request, self.template_name, context={"success": self.success})


class ResendEmailConfirmation(FormView):
    form_class = ResendEmailForm
    template_name = "dictionary/registration/email/resend_form.html"

    def form_valid(self, form):
        email = form.cleaned_data["email"]
        author = Author.objects.get(email=email)
        send_email_confirmation(author, email)
        notifications.info(
            self.request,
            _(
                "e-posta adresinize doğrulama linki gönderildi. bu linke tıklayarak hesabınızı"
                "aktif hale getirebilir ve giriş yapabilirsiniz"
            ),
        )
        return redirect("login")


class ChangePassword(LoginRequiredMixin, PasswordChangeView):
    success_url = reverse_lazy("user_preferences")
    template_name = "dictionary/user/preferences/password.html"

    def form_valid(self, form):
        message = _(
            "sayın %(username)s, şifreniz değiştiridi. bunu siz yaptıysanız,"
            " endişeye mahal yok. eğer bu işlemden haberiniz yoksa e-posta "
            " adresinizi kullanarak hesabınızı kurtarabilirsiniz."
        ) % {"username": self.request.user.username}

        # Send a 'your password has been changed' message to ensure security.
        try:
            self.request.user.email_user(_("şifreniz değiştirildi."), message, settings.FROM_EMAIL)
        except SMTPException:
            notifications.error(self.request, _("işlem başarısız, lütfen daha sonra tekrar deneyin."))
            return super().form_invalid(form)

        notifications.info(self.request, _("şifreniz değiştirildi."))
        return super().form_valid(form)


class ChangeEmail(LoginRequiredMixin, PasswordConfirmMixin, FormView):
    template_name = "dictionary/user/preferences/email.html"
    form_class = ChangeEmailForm
    success_url = reverse_lazy("user_preferences")

    def form_valid(self, form):
        send_email_confirmation(self.request.user, form.cleaned_data.get("email1"))
        notifications.info(
            self.request, _("bu doğrulamadan sonra e-posta adresiniz değiştirilecek."), extra_tags="persistent"
        )
        return redirect(self.success_url)


class TerminateAccount(LoginRequiredMixin, PasswordConfirmMixin, FormView):
    template_name = "dictionary/user/preferences/terminate.html"
    form_class = TerminateAccountForm
    success_url = reverse_lazy("login")

    def form_valid(self, form):
        message = _(
            "sayın %(username)s, hesabınız donduruldu. eğer hesabınızı silmek istediyseniz"
            ", hesabınız 5 gün içerisinde kalıcı olarak yok edilecektir."
            " bu süreden önce siteye giriş yapmanız halinde, hesabınız tekrar aktif hale"
            "getirilecektir. eğer yalnızca hesabınızı dondurmak istediyseniz -bunu neden yaptığınızı"
            "çok merak etmekle beraber-  dilediğiniz zaman giriş yaparak hesabınızı aktif hale getirebilirsiniz."
        ) % {"username": self.request.user.username}

        # Send a message to ensure security.
        try:
            self.request.user.email_user(_("hesabınız donduruldu"), message, settings.FROM_EMAIL)
        except SMTPException:
            notifications.error(self.request, _("işlem başarısız, lütfen daha sonra tekrar deneyin.we couldn't handle your request. try again later."))
            return super().form_invalid(form)

        termination_choice = form.cleaned_data.get("state")
        AccountTerminationQueue.objects.create(author=self.request.user, state=termination_choice)
        # Unlike logout(), this invalidates ALL sessions across devices.
        flush_all_sessions(self.request.user)
        notifications.info(self.request, _("your request was taken. farewell."))
        return super().form_valid(form)


class CreateBackup(LoginRequiredMixin, CreateView):
    template_name = "dictionary/user/preferences/backup.html"
    model = BackUp
    success_url = reverse_lazy("user_preferences_backup")
    fields = ()

    def form_valid(self, form):
        previous_backup_exists = BackUp.objects.filter(
            author=self.request.user, date_created__gte=time_threshold(hours=24)
        ).exists()

        if previous_backup_exists:
            notifications.error(
                self.request, _("you have already requested a backup file today."), extra_tags="persistent"
            )
            return self.form_invalid(form)

        # Delete previous backup.
        for backup in BackUp.objects.filter(author=self.request.user):
            backup.delete()

        backup = form.save(commit=False)
        backup.author = self.request.user
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        with suppress(BackUp.DoesNotExist):
            context["last_backup"] = BackUp.objects.get(author=self.request.user)

        return context

    def get_success_url(self):
        self.object.process_async()
        return super().get_success_url()


class DownloadBackup(LoginRequiredMixin, View):
    raise_exception = True

    def get(self, request):
        with suppress(BackUp.DoesNotExist, ValueError):
            backup = BackUp.objects.get(author=self.request.user, is_ready=True)
            filename = os.path.basename(backup.file.name)

            response = HttpResponse(content_type="application/json")

            if django_settings.DEBUG:
                response.content = backup.file

            response["Content-Disposition"] = f'attachment; filename="{filename}"'
            response[settings.XSENDFILE_HEADER_NAME] = backup.file.url
            return response

        self.handle_no_permission()
