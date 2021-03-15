import { TextSectionInput } from "./components/dialog/text-input.js";
import { MediaSectionInput } from "./components/dialog/media-input.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { VideoComponent } from "./components/page/item/video.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent, PageItemComponent, } from "./components/page/page.js";
var App = (function () {
    function App(appRoot, dialogRoot) {
        var _this = this;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        var imageBtn = document.querySelector("#new-image");
        imageBtn.addEventListener("click", function () {
            var dialog = new InputDialog();
            var inputSection = new MediaSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOncloseListener(function () {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnsubmitListener(function () {
                var image = new ImageComponent(inputSection.title, inputSection.url);
                _this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });
        var videoBtn = document.querySelector("#new-video");
        videoBtn.addEventListener("click", function () {
            var dialog = new InputDialog();
            var inputSection = new MediaSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOncloseListener(function () {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnsubmitListener(function () {
                var video = new VideoComponent(inputSection.title, inputSection.url);
                _this.page.addChild(video);
                dialog.removeFrom(dialogRoot);
            });
        });
        var noteBtn = document.querySelector("#new-note");
        noteBtn.addEventListener("click", function () {
            var dialog = new InputDialog();
            var inputSection = new TextSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOncloseListener(function () {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnsubmitListener(function () {
                var note = new NoteComponent(inputSection.title, inputSection.body);
                _this.page.addChild(note);
                dialog.removeFrom(dialogRoot);
            });
        });
        var todoBtn = document.querySelector("#new-todo");
        todoBtn.addEventListener("click", function () {
            var dialog = new InputDialog();
            var inputSection = new TextSectionInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOncloseListener(function () {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnsubmitListener(function () {
                var todo = new TodoComponent(inputSection.title, inputSection.body);
                _this.page.addChild(todo);
                dialog.removeFrom(dialogRoot);
            });
        });
    }
    return App;
}());
new App(document.querySelector(".document"), document.body);
