const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "language",
    },
    {
      type: "input",
      message: "What is your preferred method of communication?",
      name: " method",
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split("").join("")}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
