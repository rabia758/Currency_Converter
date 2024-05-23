import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.greenBright('\n\t=======>>>>>>.WELCOM TO MY PROJECT.>>>>>>========\N'));
const currency = {
    USD: 1, //BASECURRENCY
    EUR: 0.92,
    GPB: 0.76,
    INR: 5.12,
    PKR: 280,
};
let userans = await inquirer.prompt([
    {
        name: 'from',
        message: (chalk.red.bold('\n\tenter from your currency\n')),
        type: 'list',
        choices: ['USD', 'EUR', 'GPB', 'INR', 'PKR'],
    },
    {
        name: 'to',
        message: (chalk.red.bold('\n\tenter  TO currency\n')),
        type: 'list',
        choices: ['USD', 'EUR', 'GPB', 'INR', 'PKR'],
    },
    {
        name: 'amount',
        message: (chalk.red.bold('\n\tenter your amount\n')),
        type: 'number',
    }
]);
//chang currency
let fromAmount = currency[userans.from];
let toAmount = currency[userans.to];
let amount = userans.amount;
//changing amount by using formula
let baseamount = amount / fromAmount;
let convertedamount = baseamount * toAmount;
//using math.floor for roundfigure amount
let answer = Math.floor(convertedamount);
console.log(chalk.yellowBright(convertedamount));
console.log(chalk.bgBlueBright(fromAmount));
console.log(chalk.whiteBright(toAmount));
console.log(chalk.red(amount));
console.log(chalk.greenBright('\n\t=======>>>>>>> THANKYOU >>>>>>>>======= \n'));
