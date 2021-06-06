//Required needed docs
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");

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
                            }).then(
                                function ({ github }) {
                                    generateEngineer(name, id, email, github) //generateEngineer will be HTML card for engineer.
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
                            }).then(
                                function ({ school }) {
                                    generateSchool(name, id, email, school) //generateSchool will be HTML card for intern.
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
                            }).then(
                                function ({ officeNumber }) {
                                    generateOfficeNumber(name, id, email, officeNumber) //generateOfficeNumber will be HTML card for manager.
                                    addAnotherEmployee();
                                }
                            )
                        break
                }
            })
}

const addAnotherEmployee = () => {
    inquirer.prompt({
        type: "confirm",
        name: "addAnotherEmployee",
        message: "Would you like to add any more employees to your team?"
    }).then(({ addAnotherEmployee }) => {
        console.log('addAnotherEmployee:', addAnotherEmployee);
        if (addAnotherEmployee) {
            askPrompts();
        } else {
            renderHTML();
        }
    }
    )
    
    .catch(err => {
        console.log("ERROR: We could not add another employee to your team.", err)
        throw err
    })
}

askPrompts()
        //THIS SHOULD STILL BE NEEDED AND RELEVANT - JUST CHANGE TO HTML FILES INSTEAD.

    // .then((answers) => {
    //     const READMEPageContent = generateMarkdown(answers);

    //     fs.writeFile('README.md', READMEPageContent, (err) =>
    //         err ? console.log(err) : console.log('Successfully created README.md!')
    //     );
    // });
