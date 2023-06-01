export default class User {
    constructor(name) {
        this.name = name;
        this.isActive = false;
    }
    setStarted() {
        return this.isActive = true;
    }
}
