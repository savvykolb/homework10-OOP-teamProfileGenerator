//THIS IS FROM PREVIOUS HOMEWORK. I JUST PUT THIS HERE TO REMEMBER THE SUCCESSFUL CODE THAT IS RELEVENT.

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the link to the repository for this project?',
        },
        {
            type: 'input',
            name: 'deployed',
            message: 'What is the deployed link to this project?',
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Provide a short description explaining the what, why, and how of your project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the appropriate license for this project:',
            choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'How can others contribute to your project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'List any tests users can run for your application.',
        },
    ])


    .then((answers) => {
        const READMEPageContent = generateMarkdown(answers);

        fs.writeFile('README.md', READMEPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
