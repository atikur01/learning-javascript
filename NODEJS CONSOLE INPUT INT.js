const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter an integer: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number)) {
        console.log('Invalid input. Please enter an integer.');
        rl.close();
        return;
    }

    console.log(`You entered the number ${number}.`);
    rl.close();
});
