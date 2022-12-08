from dictionary.models.author import Question, Answer, Quiz,Result
from django.contrib import admin



@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = ("name", "topic", "number_of_questions", "time", "required_score_to_pass")
    search_fields = ("name",)

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("text", "quiz", "created")
    search_fields = ("text",)

@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ("text", "question", "correct", "created")
    search_fields = ("name",)

@admin.register(Result)
class ResultAdmin(admin.ModelAdmin):
    list_display = ("quiz", "user", "score")
    search_fields = ("name",)