#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'game',
        message: 'Guess a rendom number 1 or 5 for play a game'
    }
])
const comptuerChoise = Math.floor(Math.random()*5)+1;

if (answer.game===comptuerChoise){
    console.log(`Wow you guess correct number`);
    
}else{console.log(`You guess wrong number`);
}