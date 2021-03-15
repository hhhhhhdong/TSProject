var BaseComponent = (function () {
    function BaseComponent(htmlString) {
        var template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild;
        console.log(this.element);
    }
    BaseComponent.prototype.attachTo = function (parent, position) {
        if (position === void 0) { position = 'afterbegin'; }
        parent.insertAdjacentElement(position, this.element);
    };
    BaseComponent.prototype.removeFrom = function (parent) {
        if (parent !== this.element.parentElement) {
            throw new Error('Parent mismatch!');
        }
        parent.removeChild(this.element);
    };
    return BaseComponent;
}());
export { BaseComponent };
