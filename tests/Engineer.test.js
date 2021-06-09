const Engineer = require("../lib/Engineer");

 
describe("Engineer Class should return an object", () => {
    const engineer = new Engineer();
    it("should return object", () => {
        expect(typeof(engineer)).toBe("object");
    })
})

describe("Test for all methods in Engineer class", () => {
    const engineer = new Engineer('Nick Jonas', '02', 'jonas@gmail.com', 'njonas')
    it("Should return name", () => {
        expect(engineer.getName()).toBe('Nick Jonas')
    })
    it("Should return ID", () => {
        expect(engineer.getId()).toBe('02')
    })
    it("Should return email", () => {
        expect(engineer.getEmail()).toBe('jonas@gmail.com')
    })
    it("Should return GitHub username", () => {
        expect(engineer.getGithub()).toBe('njonas')
    })
})

describe("Engineer class role should always be engineer", () => {
    const userInput = "Engineer";
    const engineer = new Engineer('Nick Jonas', '02', 'jonas@gmail.com', 'njonas')
    it("Should return engineer role", () => {
        expect(engineer.getRole()).toBe(userInput);

    })
})

describe("Username is recieved through getGithub method", () => {
    const userInput = "njonas";
    const engineer = new Engineer('Nick Jonas', '02', 'jonas@gmail.com', userInput);
    it("Should return engineer gitHub username", () => {
        expect(engineer.getGithub()).toBe(userInput);

    })
})