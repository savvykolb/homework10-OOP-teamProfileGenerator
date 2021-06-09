const Intern = require("../lib/Intern");

 
describe("Intern Class should return an object", () => {
    const intern = new Intern();
    it("should return object", () => {
        expect(typeof(intern)).toBe("object");
    })
})

describe("Test for all methods in Intern class", () => {
    const intern = new Intern('Kevin Jonas', '03', 'jonas@gmail.com', 'Third Wheel University')
    it("Should return name", () => {
        expect(intern.getName()).toBe('Kevin Jonas')
    })
    it("Should return ID", () => {
        expect(intern.getId()).toBe('03')
    })
    it("Should return email", () => {
        expect(intern.getEmail()).toBe('jonas@gmail.com')
    })
    it("Should return School name", () => {
        expect(intern.getSchool()).toBe('Third Wheel University')
    })
})

describe("Intern class role should always be intern", () => {
    const userInput = "Intern";
    const intern = new Intern('Kevin Jonas', '03', 'jonas@gmail.com', 'Third Wheel University')
    it("Should return intern role", () => {
        expect(intern.getRole()).toBe(userInput);

    })
})

describe("School is recieved through getSchool method", () => {
    const userInput = "Third Wheel University";
    const intern = new Intern('Kevin Jonas', '03', 'jonas@gmail.com', userInput);
    it("Should return intern school name", () => {
        expect(intern.getSchool()).toBe(userInput);

    })
})