// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const mitLic = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
const gnuLic = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
const apacheLic = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

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
      choices:['MIT License', 'GNU GPL V.3 License', 'Apache v.2 License', 'None']
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
    let license;   
    if (response.License === 'MIT License') {
      license = mitLic
    } else if (response.License === 'GNU GPL V.3 License') {
      license = gnuLic
    } else if (response.License === 'Apache v.2 License') {
      license = apacheLic
    } else {
      license = ''
    }


    const readMeText = `# ${response.title}

${license}

## Description:

` + '```md' + `
${response.description}
` + '```' + `

## Table of Contents:


- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)


## Installation:

` + '```md' + `
${response.install}
` + '```' + `

## Usage:

` + '```md' + `
${response.usage}
` + '```' + `

## Contributions:

` + '```md' + `
${response.contribution}
` + '```' + `

## Tests:

` + '```md' + `
${response.test}
` + '```' + `

## License:

` + '```md' + `
${response.License}
` + '```' + `

## Questions:

Github:
[${response.gitUser}]` + '(https://github.com/' + response.gitUser + ')' + `

Email:
${response.email}

Instructions on how to reach me:
${response.howToReachMe}
`;
      fs.writeFile('README.md', readMeText, err => {
        err ? console.error(err) : console.log('Success!')
        });
    });

