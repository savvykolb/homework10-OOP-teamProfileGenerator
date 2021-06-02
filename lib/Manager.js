// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`

const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber, title) {
        super(name, id, email); //still not confident in what super is - found in activity 23&24
        this.officeNumber = officeNumber;
        this.title = title;
    }
    getOfficeNumber() {

    }
    getRole() {
        return this.title; //from directions

    }

}

module.exports = Manager;