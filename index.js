//Required needed docs
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");

//1 . I need to create initial questions
//2. Then questions depending on title
//3. I will need to create functions to call html elements depending on user input.
//4. It needs to write hrml and css file. 

//NOTES as I think:
    // Look back at Weather HW to generate cards. 
    // Could I write CSS into HTML to save the time?
            //best practices??

            
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?', //change questions
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?', //change questions
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
