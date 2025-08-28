export default class Person{
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
}