//Required needed docs
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");

//1 . I need to create initial questions
         // WHEN I start the application
        // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
        // WHEN I enter the team manager’s name, employee ID, email address, and office number
        // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team


//2. Then questions depending on title - Manager Employee engineer etc. They have different prompts.
        // WHEN I select the engineer option
        // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        // WHEN I select the intern option
        // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu


//3. I will need to create functions to call html elements depending on user input.
//4. It needs to write hrml and css file. 

//NOTES as I think:
    // Look back at Weather HW to generate cards. 
    // Could I write CSS into HTML to save the time?
            //best practices??

            
const employees = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter Team Member's Name:", 
        },
        {
            type: 'list',
            name: 'role',
            message: "Enter Team Member's Role:",
            choices: [
                "Engineer",
                "Intern",
                "Manager",
            ], //this needs to be last
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?', //change questions
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?', //change questions
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the link to the repository for this project?', //change questions
        },
        {
            type: 'input',
            name: 'deployed',
            message: 'What is the deployed link to this project?', //change questions
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Provide a short description explaining the what, why, and how of your project.', //change questions
        },
       
    ])


    //THIS SHOULD STILL BE NEEDED AND RELEVANT - JUST CHANGE TO HTML FILES INSTEAD. 

    .then((answers) => {
        const READMEPageContent = generateMarkdown(answers);

        fs.writeFile('README.md', READMEPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
