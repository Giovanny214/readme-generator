// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
# ${data.title}
https://github.com/${data.ghubUser}/${data.title}
## Description
${data.description}
## Table of Contents (Optional)
${data.tableOfC}
## Installation
${data.install}
## Usage
${data.usageInfo}
#3 License
${data.license}
## How to Contribute
${data.cGuide}
## Tests
${data.testIn}
`;
}

module.exports = generateMarkdown;