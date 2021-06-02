// The other three classes will extend `Employee`.

class Employee {
    constructor(name, id, email, title){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title - title;
    }
    getName() {

    }
    getId() {

    }
    getEmail() {

    }
    getRole() {
        return this.title; //from directions
    }

}

module.exports = Employee