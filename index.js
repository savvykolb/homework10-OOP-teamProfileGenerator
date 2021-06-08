const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateManager = require("./src/manager");

const fs = require("fs");

const managerPrompts = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter Manager's Name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter Manager's ID Number:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter Manager's email address:",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter Manager's current office number:",
            }
        ]);

        fs.writeFile('./dist/team.html', generateManager, (err) => err ? console.log(err) : '')
}

const askPrompts = () => {
    inquirer.prompt(managerPrompts).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.officeNum, answers.email)
        generateManager(manager);
        addOrGenerate();
    })
}

askPrompts();