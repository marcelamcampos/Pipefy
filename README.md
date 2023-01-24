### Hi there 👋

This is the techinicall assignment for the QA role at **Pipefy** - which uses **Cypress** for the E2E test cases.

### Assignment Status
<ul>
  <li> <b>Web E2E</b><br>Test cases failing: Page locators kept changing and I was not able to find solid locators that would work despite how the UI looked</li>
  Tests were running properly and included the list bellow - but then got flaky:  <br>
  	✓ Non mandatory fields <br>
  	✓ mandatory fields  <br>
  	✓ Page Object  <br>

</ul>

<ul>
  <li><b>Backend</b><br> Project not included: I was not able to fully understand how to setup queries/mutations using GraphQL in time </li>
</ul>




### Cypress Setup

If you have already node/npm installed, you can simply use: npm install cypress --save-dev

1. Installing node.js
  1. access https://nodejs.org/en/download/
  2. select your OS and download the installer
** You may also install node using brew: https://formulae.brew.sh/formula/node

2. Once node is installed, you can run the command: npm install cypress --save-dev


### Running the tests
1. Clone this repository <br>
git clone (https://github.com/marcelamcampos/Pipefy.git) 

2. Access the project folder <br>
cd /where-you-saved-the-project

3. Install dependecies <br>
$npm install 

5. Execute the project <br>
$ npx cypress run <br>
You can find more on running cypress here: https://docs.cypress.io/guides/guides/command-line

