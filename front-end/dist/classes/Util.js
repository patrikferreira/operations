export default class Util {
    constructor() { }
    static refreshHtml(container, data) {
        this.clearHtml(container);
        container.appendChild(data);
    }
    static clearHtml(container) {
        container.innerHTML = '';
    }
}
