const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this application?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const response = generateMarkdown(answers);
    console.log(response);
    fs.writeToFile('README.md', response, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
  });
}

// function call to initialize program
init();
