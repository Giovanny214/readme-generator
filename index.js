// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Whats the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Whats the description of your project?',
    },
    {
        type: 'confirm',
        name: 'tableOfC',
        message: 'Do you want a table of contents?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are your installation instructions?',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'What is your usage information?',
    },
    {
        type: 'input',
        name: 'cGuide',
        message: 'What are your contribution guidelines?',
    },
    {
        type: 'input',
        name: 'testIn',
        message: 'What are your test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What are your application licenses?',
        choices: [
            'None',
            'Apache license 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'Creative Commons Zero v1.0 Universal',
            'Do What The F*ck You Want To Public License',
            'Eclipse Public License 1.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License v3.0',
            'MIT',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'gHubUser',
        message: 'Whats your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Whats your email?',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err === true) {
            return console.log(err);
        } else {
            console.log("its good");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("READEME.md", generatorMarkdown(data));
        console.log(data);
        
    })
}

// Function call to initialize app
init();
