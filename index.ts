#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.bold.bgBlueBright("\n\tWelcome to code with Sehar - Words Counter\n"));
console.log("=".repeat(60));

let answer = await inquirer.prompt([
    {
        name : "Sentence",
        type : "input",
        message : "Enter a sentence..."
    }
]);
let words = answer.Sentence.trim().split(" ");

console.log("=".repeat(60));
console.log("Sentence words:");
console.log(words);
console.log(chalk.bold.bgCyan(`\n\tWord Count: ${words.length}`));
console.log("=".repeat(60));