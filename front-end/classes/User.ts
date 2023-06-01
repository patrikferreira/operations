export default class User {
    name: string;
    isActive: boolean
    constructor(name: string) {
        this.name = name;
        this.isActive = false;
    }

    setStarted() {
        return this.isActive = true;
    }
}