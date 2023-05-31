export default class Util {
    constructor(){}
    public static refreshHtml(container: HTMLElement, data: HTMLElement) {
        this.clearHtml(container);
        container.appendChild(data);
    }

    public static clearHtml(container: HTMLElement) {
        container.innerHTML = '';
    }
}