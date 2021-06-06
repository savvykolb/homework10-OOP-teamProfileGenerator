const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github, title) {
        super(name, id, email); //still not confident in what super is - found in activity 23&24
        this.github = github;
        this.title = title;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.title; //from directions

    }

}

module.exports = Engineer;
