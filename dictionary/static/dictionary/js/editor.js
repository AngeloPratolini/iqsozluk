/* global gettext, pgettext */

import { Handle, Handler, one } from "./utils"
import { deleteImage } from "./image"
import Dropzone from "dropzone"

function insertAtCaret (el, insertValue) {
    const startPos = el.selectionStart
    if (startPos) {
        const endPos = el.selectionEnd
        const scrollTop = el.scrollTop
        el.value = el.value.substring(0, startPos) + insertValue + el.value.substring(endPos, el.value.length)
        el.focus()
        el.selectionStart = startPos + insertValue.length
        el.selectionEnd = startPos + insertValue.length
        el.scrollTop = scrollTop
    } else {
        el.value += insertValue
        el.focus()
    }
}

function insertMeta (type) {
    let fmt

    switch (type) {
        case "ref":
            fmt = [gettext("referans verilecek başlık, #girdi veya @yazar:"), text => `(${pgettext("editor", "see")}: ${text})`]
            break
        case "thingy":
            fmt = [gettext("hangi başlık veya #entry için hede oluşturulacak?"), text => `\`${text}\``]
            break
        case "swh":
            fmt = [gettext("yıldız içinde ne görünsün?"), text => `\`:${text}\``]
            break
        case "spoiler": {
            const spoiler = gettext("spoiler")
            fmt = [gettext("spoiler arasına ne yazılacak?"), text => `--\`${spoiler}\`--\n${text}\n--\`${spoiler}\`--`]
            break
        }
    }

    return { label: fmt[0], format: fmt[1] }
}

function replaceText (textarea, type) {
    const start = textarea.selectionStart
    const finish = textarea.selectionEnd
    const allText = textarea.value
    const sel = allText.substring(start, finish)
    if (!sel) {
        return false
    } else {
        if (type === "link") {
            const linkText = prompt(gettext("hangi adrese gidecek?"), "http://")
            if (linkText && linkText !== "http://") {
                textarea.value = allText.substring(0, start) + `[${linkText} ${sel}]` + allText.substring(finish, allText.length)
            }
        } else {
            textarea.value = allText.substring(0, start) + insertMeta(type).format(sel) + allText.substring(finish, allText.length)
        }
        textarea.focus()
        return true
    }
}

let meta
let label
const doneButton = one("#editor_done")
const input = one("#editor_input")
const modal = one("#editorModal")

if (modal) {
    label = modal.querySelector("label")
}

const userContent = one("#user_content_edit")
const dropzone = one(".dropzone")

Handle("button#insert_image", "click", () => {
    dropzone.style.display = dropzone.style.display === "none" ? "" : "none"
})

Handle("button#insert_link", "click", () => {
    if (!replaceText(userContent, "link")) {
        const linkText = prompt(gettext("verilecek linkin adı ne olacak?"), "http://")
        if (linkText && linkText !== "http://") {
            const linkName = prompt(gettext("verilecek linkin adı ne olacak?"))
            const text = linkName ? `[${linkText} ${linkName}]` : linkText
            insertAtCaret(userContent, text)
        }
    }
})

Handle(doneButton, "click", () => {
    input.value.trim() && insertAtCaret(userContent, meta.format(input.value.trim()))
})

Handle(input, "keydown", event => {
    event.key === "Enter" && doneButton.dispatchEvent(new Event("click", { bubbles: true }))
})

Handler("button.insert", "click", function () {
    const type = this.getAttribute("data-type")
    if (!replaceText(userContent, type)) {
        meta = insertMeta(type)
        label.textContent = meta.label
        input.value = ""
        modal._modalInstance.show(null)
    }
})

Dropzone.options.userImageUpload = {
    addRemoveLinks: true,
    paramName: "file",
    maxFilesize: 2.5, // MB
    acceptedFiles: "image/*",
    maxFiles: 10,
    dictRemoveFileConfirmation: gettext("emin misiniz?"),
    dictDefaultMessage: gettext("buraya tıklayıp görselleri seçin veya sürükleyip bırakın"),
    dictRemoveFile: gettext("görseli sil"),
    dictFileTooBig: gettext("Dosya çok büyük ({{filesize}}MB). Maksimum boyut: {{maxFilesize}}MB."),
    dictMaxFilesExceeded: gettext("Daha fazla dosya yükleyemezsiniz."),
    dictUploadCanceled: gettext("yükleme iptal edildi."),
    dictCancelUploadConfirmation: gettext("Emin misiniz?"),

    success (file, response) {
        insertAtCaret(userContent, `(${pgettext("editor", "görsel")}: ${response.slug})`)
    },

    removedfile (file) {
        file.previewElement.remove()
        const slug = JSON.parse(file.xhr.response).slug
        userContent.value = userContent.value.replace(new RegExp(`\\(${pgettext("editor", "görsel")}: ${slug}\\)`, "g"), "")
        deleteImage(slug)
    }
}
