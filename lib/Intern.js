const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, school, title) {
        super(name, id, email); //still not confident in what super is - found in activity 23&24
        this.school = school;
        this.title = title;
    }
    getSchool() {

    }
    getRole() {
        return this.title; //from directions

    }

}

module.exports = Intern;