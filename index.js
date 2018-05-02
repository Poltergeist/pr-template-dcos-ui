#!/usr/bin/env node

let programm = require("commander");

programm
  .version(require("./package.json").version)
  .option("-j, --jira", "Issue is linked")
  .option("-u, --unit", "unit tests are added")
  .option("-i, --integration", "integration tests are added")
  .option("-r, --regression", "is this a regression")
  .parse(process.argv);

console.log(`
**Checklist**
- [${
  programm.jira ? `x` : ` `
}] Did you add a JIRA issue in a commit message or as part of the branch name?
- [${programm.unit ? `x` : ` `}] Did you add new unit tests?
- [${programm.integration ? `x` : ` `}] Did you add new integration tests?
- [${
  programm.regression ? `x` : ` `
}] If this is a regression, did you write a test to catch this in the future?
`);
