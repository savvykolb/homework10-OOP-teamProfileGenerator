//Required needed docs
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

let finalTeamArray = [];
console.log('finalTeamArray:', finalTeamArray)

const askPrompts = () => {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter Employees's Name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter Employees's ID Number:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter Employees's email address:",
            },
            {
                type: 'list',
                name: 'role',
                message: "Enter Employees's Role:",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager",
                ],
            },
        ])
        .then( //returns a promise - still need to be more comfortable in understanding promises. This link helped https://javascript.info/promise-basics
            function ({ name, id, email, role }) { //refering to the constructor object 
                switch (role) { //switch statement
                    case "Engineer":
                        inquirer
                            .prompt({
                                type: "input",
                                name: "github",
                                message: "Enter Engineer's GitHub username:",
                            }).then(function (data) {
                                const name = data.name
                                const id = finalTeamArray.length + 1
                                const email = data.email
                                const github = data.github
                                const teamMember = new Engineer(name, id, email, github)
                                finalTeamArray.push(teamMember)
                                addAnotherEmployee();
                            }
                            )
                        break
                    case "Intern":
                        inquirer
                            .prompt({
                                type: "input",
                                name: "school",
                                message: "Enter Intern's current school:",
                            })
                            .then(function (data) {
                                const name = data.name
                                const id = finalTeamArray.length + 1
                                const email = data.email
                                const school = data.school
                                const teamMember = new Intern(name, id, email, school)
                                finalTeamArray.push(teamMember)
                                addAnotherEmployee();
                            }
                            )
                        break
                    case "Manager":
                        inquirer
                            .prompt({
                                type: "input",
                                name: "officeNumber",
                                message: "Enter Manager's current office number:",
                            }).then(function (data) {
                                const name = data.name
                                const id = 1
                                const email = data.email
                                const officeNumber = data.officeNumber
                                const teamMember = new Manager(name, id, email, officeNumber)
                                finalTeamArray.push(teamMember)
                                addAnotherEmployee();
                            }
                            )
                        break
                }
            })
}

const addAnotherEmployee = () => {
    inquirer.prompt({
        type: "list",
        name: "addAnotherEmployee",
        message: "Would you like to add any more employees to your team?",
        choices: ["Yes, I have more team members to add.", "No, my team is complete."],
    }).then(function (data) {

        switch (data.addAnotherEmployee) {
            case "Yes, I have more team members to add.":
                askPrompts();
                break;
            case "No, my team is complete":
                compileTeam();
                break;
        }
    });
}



askPrompts()
        //THIS SHOULD STILL BE NEEDED AND RELEVANT - JUST CHANGE TO HTML FILES INSTEAD.

    // .then((answers) => {
    //     const READMEPageContent = generateMarkdown(answers);

    //     fs.writeFile('README.md', READMEPageContent, (err) =>
    //         err ? console.log(err) : console.log('Successfully created README.md!')
    //     );
    // });
