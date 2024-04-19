#! /usr/bin/env node
//this line is called shabang,it tells the OS for the node js
//import the "inquirer" module,which is command line interface for Node js,
import inquirer from "inquirer";
//Declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "Input",
        message: "Enter your sentence to count the word"
    }
]);
const words = answers.Sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the word count of the sentence to the console
console.log(`your Sentence word count is ${words.length}`);
