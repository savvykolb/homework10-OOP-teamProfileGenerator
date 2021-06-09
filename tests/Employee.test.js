const Employee = require("../lib/Employee");
 
describe("Employee Class should return an object", () => {
    const employee = new Employee();
    it("should return object", () => {
        expect(typeof(employee)).toBe("object");
    })
})

describe("Test for all methods in Employee class", () => {
    const employee = new Employee('Joe Jonas', '01', 'jonas@gmail.com')
    it("Should return name", () => {
        expect(employee.getName()).toBe('Joe Jonas')
    })
    it("Should return ID", () => {
        expect(employee.getId()).toBe('01')
    })
    it("Should return email", () => {
        expect(employee.getEmail()).toBe('jonas@gmail.com')
    })
})

describe("Employee class role should always be employee", () => {
    const userInput = "Employee";
    const employee = new Employee('Joe Jonas', '01', 'jonas@gmail.com')
    it("Should return employee role", () => {
        expect(employee.getRole()).toBe(userInput);

    })
})

describe("Email is recieved through getEmail method", () => {
    const userInput = "jonas@gmail.com";
    const employee = new Employee('Joe Jonas', '01', userInput);
    it("Should return employee email", () => {
        expect(employee.getEmail()).toBe(userInput);

    })
})


