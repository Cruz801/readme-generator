// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];
const promptUser = () => {
     inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'Title of your project? (Required)',
            validate: titleInput => {
                if (titleInput){
                    return true
                }else {
                    console.log('Please enter title of your project');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'what',
            message: 'Brief description of this project?(Required)',
            validate: titleInput => {
                if(titleInput){
                    return true
                } else {
                    console.log('Please enter valid input')
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'how',
            message: 'How was this project made?',
            choices: ['JavaScript', 'HTML', 'CSS', 'Node', 'ES6']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command needed for installation?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What command starts app?',
        },
        {
            type: 'input',
            name: 'git',
            message: 'what is your Github username?',
            validate: titleInput => {
                if(titleInput){
                    return true
                } else {
                    console.log('Please enter username')
                    return false
                }
            }
        },
        {
        type: 'list',
            name: 'license',
            message: 'What license',
            choices: ['MIT', 'APACHE-2.0', 'GPL-3.0']
        }
    ])
    .then((answers) => {
        const markDownString = generateMarkdown(answers); // getting users input
        
        writeToFile('HERE.md', markDownString)
    })
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log('writeToFile',fileName)
fs.writeFile(fileName, data, (err) => {
    if (err) throw err
    console.log('file created!', writeToFile, data);
})
}

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
