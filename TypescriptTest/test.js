var Identification = (function () {
    function Identification(name, lastName) {
        this.name = null;
        this.lastName = null;
        this.name = name;
        this.lastName = lastName;
    }
    Identification.prototype.identificate = function () {
        console.log(this.name + ' ' + this.lastName);
    };
    return Identification;
})();
