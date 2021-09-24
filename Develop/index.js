// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of your porject?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter table of contents',
      name: 'contents',
    },
    {
      type: 'input',
      message: 'Installation instructions',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Usage Information',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Contribution Guidelines',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Test Instructions',
      name: 'test',
    },
    {
      type: 'list',
      message: 'License',
      name: 'License',
      choices:['License A', 'License B', 'License C']
    },
    {
      type: 'input',
      message: 'GitHub UserName:',
      name: 'gitUser',
    },
    {
      type: 'input',
      message: 'Email Address:',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Instructions on how to reach me for questions:',
      name: 'howToReachMe',
    },
  ])
  .then((response) => {
      const readMeText = `# ${response.title}


## Description:


${response.description}


## Table of Contents:


${response.contents}


## Installation:


${response.install}


## Usage:


${response.usage}


## Contributing:


${response.contribution}


## Tests:


${response.test}


## License:


${response.License}


## Questions:


${response.gitUser}



${response.email}



${response.howToReachMe}

`;
      fs.writeFile('README.md', readMeText, err => {
        err ? console.error(err) : console.log('Success!')
        });
    });






    // // TODO: Create an array of questions for user input
// const questions = [];




// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}




// // TODO: Create a function to initialize app
// function init() {}




// // Function call to initialize app
// init();