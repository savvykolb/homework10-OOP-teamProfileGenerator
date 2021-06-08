const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber, title) {
        super(name, id, email); //still not confident in what super is - found in activity 23&24
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.title; //from directions

    }

}

module.exports = Manager;