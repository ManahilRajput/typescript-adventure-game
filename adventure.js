#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 10;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 20;
        this.fuel = fuel;
    }
}
const a = await inquirer.prompt([
    {
        name: "player",
        type: "input",
        message: chalk.blue.bold("ENTER YOUR NAME :"),
    }
]);
let b = await inquirer.prompt([{
        name: "opponent",
        type: "list",
        message: "SELECT YOUR OPPONENT :",
        choices: [chalk.green("ZOMBIE"), chalk.red("SKELETON"), chalk.magenta("ASSASIN")],
    },
]);
let p = new Player(a.player);
let o = new Opponent(b.opponent);
do {
    if (b.opponent == chalk.green("ZOMBIE")) {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "select",
                message: chalk.bgGray("what do you wanna do ?"),
                choices: [chalk.cyan("ATTACK!!"), chalk.yellow("DRINK POTION!"), chalk.grey("RUN FOR YOUR LIFE..")],
            }]);
        if (ask.select == chalk.cyan("ATTACK!!")) {
            let num = Math.floor(Math.random() * 5);
            if (num > 0) {
                p.fuelDecrease();
                console.log(chalk.green(`${p.name} fuel is : ${p.fuel}`));
                console.log(chalk.red(`${o.name} fuel is : ${o.fuel}`));
                if (p.fuel <= 0) {
                    console.log(chalk.magentaBright.bold("YOU LOSE ! , BETTER luck next time.."));
                }
            }
            if (num <= 0) {
                o.fuelDecrease();
                console.log(chalk.green(`${o.name} fuel is : ${o.fuel}`));
                console.log(chalk.red(`${p.name} fuel is : ${p.fuel}`));
                if (o.fuel <= 0) {
                    console.log(chalk.yellowBright.bold("!! CONGRATULATIONS YOU WON !!"));
                    process.exit();
                }
            }
        }
        if (ask.select == chalk.yellow("DRINK POTION!")) {
            p.fuelIncrease();
            console.log(chalk.cyanBright.italic(`you drink health potion now your fuel is ${p.fuel}`));
        }
        if (ask.select == chalk.grey("RUN FOR YOUR LIFE..")) {
            console.log(chalk.bgMagentaBright("YOU LOSE ! , BETTER luck next time.."));
            process.exit();
        }
    }
    if (b.opponent == chalk.red("SKELETON")) {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "select",
                message: chalk.bgGray("what do you wanna do ?"),
                choices: [chalk.cyan("ATTACK!!"), chalk.yellow("DRINK POTION!"), chalk.grey("RUN FOR YOUR LIFE..")],
            }]);
        if (ask.select == chalk.cyan("ATTACK!!")) {
            let num = Math.floor(Math.random() * 5);
            if (num > 0) {
                p.fuelDecrease();
                console.log(chalk.green(`${p.name} fuel is : ${p.fuel}`));
                console.log(chalk.red(`${o.name} fuel is : ${o.fuel}`));
                if (p.fuel <= 0) {
                    console.log(chalk.magentaBright.bold("YOU LOSE ! , BETTER luck next time.."));
                }
            }
            if (num <= 0) {
                o.fuelDecrease();
                console.log(chalk.green(`${o.name} fuel is : ${o.fuel}`));
                console.log(chalk.red(`${p.name} fuel is : ${p.fuel}`));
                if (o.fuel <= 0) {
                    console.log(chalk.yellowBright.bold("!! CONGRATULATIONS YOU WON !!"));
                    process.exit();
                }
            }
        }
        if (ask.select == chalk.yellow("DRINK POTION!")) {
            p.fuelIncrease();
            console.log(chalk.cyanBright.italic(`you drink health potion now your fuel is ${p.fuel}`));
        }
        if (ask.select == chalk.grey("RUN FOR YOUR LIFE..")) {
            console.log(chalk.bgMagentaBright("YOU LOSE ! , BETTER luck next time.."));
            process.exit();
        }
    }
    if (b.opponent == chalk.magenta("ASSASIN")) {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "select",
                message: chalk.bgGray("what do you wanna do ?"),
                choices: [chalk.cyan("ATTACK!!"), chalk.yellow("DRINK POTION!"), chalk.grey("RUN FOR YOUR LIFE..")],
            }]);
        if (ask.select == chalk.cyan("ATTACK!!")) {
            let num = Math.floor(Math.random() * 5);
            if (num > 0) {
                p.fuelDecrease();
                console.log(chalk.green(`${p.name} fuel is : ${p.fuel}`));
                console.log(chalk.red(`${o.name} fuel is : ${o.fuel}`));
                if (p.fuel <= 0) {
                    console.log(chalk.magentaBright.bold("YOU LOSE ! , BETTER luck next time.."));
                }
            }
            if (num <= 0) {
                o.fuelDecrease();
                console.log(chalk.green(`${o.name} fuel is : ${o.fuel}`));
                console.log(chalk.red(`${p.name} fuel is : ${p.fuel}`));
                if (o.fuel <= 0) {
                    console.log(chalk.yellowBright.bold("!! CONGRATULATIONS YOU WON !!"));
                    process.exit();
                }
            }
        }
        if (ask.select == chalk.yellow("DRINK POTION!")) {
            p.fuelIncrease();
            console.log(chalk.cyanBright.italic(`you drink health potion now your fuel is ${p.fuel}`));
        }
        if (ask.select == chalk.grey("RUN FOR YOUR LIFE..")) {
            console.log(chalk.bgMagentaBright("YOU LOSE ! , BETTER luck next time.."));
            process.exit();
        }
    }
} while (true);
