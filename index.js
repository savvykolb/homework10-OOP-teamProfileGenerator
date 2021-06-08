const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");

const managerPrompts = [
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
        ]

 

const askPrompts = () => {
    inquirer.prompt(managerPrompts).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.officeNumber, answers.email)
        generateManager(manager);
        addOrGenerate();
    })
}

const generateManager = (manager) => {
    const renderM = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron jumbotron-fluid p-3 mb-2 bg-secondary text-white">
        <div class="container">
            <h1 class="display-1 text-center">Team Profile</h1>
        </div>
    </div>
    <div class=container>
        <div class="row">
            <div class =col>
                <div class="card" style="width: 15rem;">
                    <div class="card-header p-3 mb-2 bg-danger text-white">
                        <h4 class="text-center">Manager</h4>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${manager.getName()}</h5>
                        <ul>
                            <li>ID: ${manager.getId()}</li>
                            <li>${manager.getOfficeNumber()}</li>
                            <li><a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></li>
                        </ul>
                    </div>
                </div>
            </div>`;
            fs.writeFile('./dist/team.html', renderM, (err) => err ? console.log(err) : '')

};

const addOrGenerate = () => {
    inquirer.prompt([{
        type: "list",
        name: "newEmployee",
        message: "Would you like to add any more employees to your team?",
        choices: ["Yes, I have more team members to add.", "No, my team is complete."],
    }]).then((answer) => {
        if (answer.newTeamMem === 'Yes, I have more team members to add.') {
            // addNewEmployee();
        } else {
            console.log('Your Team Profile has been generated!');
            const endHTML = `
            </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
                crossorigin="anonymous"></script>
        </body>
        </html>`
            fs.appendFile('./dist/team.html', endHTML, (err) => err ? console.log(err) : '')
        }
    });
};

askPrompts();