const Employee = require("../lib/Employee");
 
describe("Employee Class should return an object", () => {
    const employee = new Employee();
    it("should return object", () => {
        expect(typeof(employee)).toBe("object");
    })
})

//Start with basic test writing if Engineer returns and object
//Then do a test for each method

//You can do this for each file
// describe("Employee Class tests for all methods", () => {
//     const employee = new Employee('Empl O. Yee', '01', 'employee@email.com')
//     it("Should return name", () => {
//         expect(employee.getName()).toBe('Empl O. Yee')
//     })
//     it("Should return ID", () => {
//         expect(employee.getId()).toBe('01')
//     })
//     it("Should return email", () => {
//         expect(employee.getEmail()).toBe('employee@email.com')
//     })
// })