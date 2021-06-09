const Manager = require("../lib/Manager");

 
describe("Manager Class should return an object", () => {
    const manager = new Manager();
    it("should return object", () => {
        expect(typeof(manager)).toBe("object");
    })
})

describe("Test for all methods in Manager class", () => {
    const manager = new Manager('Frankie Jonas', '04', 'jonas@gmail.com', '2021')
    it("Should return name", () => {
        expect(manager.getName()).toBe('Frankie Jonas')
    })
    it("Should return ID", () => {
        expect(manager.getId()).toBe('04')
    })
    it("Should return email", () => {
        expect(manager.getEmail()).toBe('jonas@gmail.com')
    })
    it("Should return Office Number", () => {
        expect(manager.getOfficeNumber()).toBe('2021')
    })
})

describe("Manager class role should always be manager", () => {
    const userInput = "Manager";
    const manager = new Manager('Frankie Jonas', '04', 'jonas@gmail.com', '2021')
    it("Should return manager role", () => {
        expect(manager.getRole()).toBe(userInput);

    })
})

describe("Office Number is recieved through getOfficeNumber method", () => {
    const userInput = "Third Wheel University";
    const manager = new Manager('Frankie Jonas', '04', 'jonas@gmail.com', userInput);
    it("Should return manager Office Number", () => {
        expect(manager.getOfficeNumber()).toBe(userInput);

    })
})