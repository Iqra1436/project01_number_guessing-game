#! /usr/bin/env node
import inquirer from "inquirer";

//  1) Computer will generate a ramdon numner
//  2) User input for quessing numner
// 3) Compareuser input with computer generated number show results

const randomNumber = Math.floor(Math.random() * 6 +1 );
console.log(randomNumber);

const answers = await inquirer.prompt([
    {
        name: "UserGuessdNumber",
        type : "number",
        message : "Please guess a number between 1-6",
    },
    ]);
    if(answers.UserGuessdNumber === randomNumber){
        console.log ("Congratulation ! you guested  right number")
    }
    else{
        console.log ("Sorry ! you guested Wrong number")
    }