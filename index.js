//Required needed docs
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");

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
                    "Manager",
                    "Engineer",
                    "Intern",
                ],
            },
        ])
        .then( //returns a promise - still need to be more comfortable in understanding promises. This link helped https://javascript.info/promise-basics
            function ({ name, id, email, role }) { //refering to the constructor object 
                switch (role) { //switch statement
                    case "Manager":
                        inquirer
                            .prompt({
                                type: "input",
                                name: "officeNumber",
                                message: "Enter Manager's current office number:",
                            }).then(function (data) {
                                const name = data.name
                                const id = data.id
                                const email = data.email
                                const officeNumber = data.officeNumber
                                const teamMember = new Manager(name, id, email, officeNumber)
                                finalTeamArray.push(teamMember)
                                console.log('finalTeamArray:', finalTeamArray)
                                addAnotherEmployee();
                            }
                            )
                        break
                    case "Engineer":
                        inquirer
                            .prompt({
                                type: "input",
                                name: "github",
                                message: "Enter Engineer's GitHub username:",
                            }).then(function (data) {
                                const name = data.name
                                const id = data.id
                                const email = data.email
                                const github = data.github
                                const teamMember = new Engineer(name, id, email, github)
                                finalTeamArray.push(teamMember)
                                console.log('finalTeamArray:', finalTeamArray)
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
                                console.log('finalTeamArray:', finalTeamArray)
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
                // inquirer
                //     .prompt({
                //         type: "input",
                //         name: "teamname",
                //         message: "Enter your Team Name:",
                //     }).then(function (data) {
                //         const teamName = data.teamname
                //         finalTeamArray.push(teamName)
                        compileTeam();
                        break;
                //     })
        }
    });
}

function compileTeam() {
    console.log("//////////YOUR TEAM IS BEING CREATED!!////////")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${finalTeamArray[0]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>${finalTeamArray[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < finalTeamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${finalTeamArray[i].name}</h2>
                <h2>${finalTeamArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${finalTeamArray[i].id}</p>
                <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a>></p>
        `
        if (finalTeamArray[i].officeNumber) {
            object += `
            <p>${finalTeamArray[i].officeNumber}</p>
            `
        }
        if (finalTeamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
            `
        }
        if (finalTeamArray[i].school) {
            object += `
            <p>School: ${finalTeamArray[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/${finalTeamArray[0]}.html`, htmlArray.join(""), function (err) {

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
