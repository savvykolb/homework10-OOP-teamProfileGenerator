// The other three classes will extend `Employee`.

class Employee {
    constructor(name, id, email, title){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee"; //from directions
    }

}

module.exports = Employee