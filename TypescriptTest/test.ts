class Identification {
    name: string = null;
    lastName: string = null;
    constructor(name?, lastName?) {
        this.name = name;
        this.lastName = lastName;
    }
    identificate() {
        console.log(this.name + ' ' + this.lastName);
    }
}