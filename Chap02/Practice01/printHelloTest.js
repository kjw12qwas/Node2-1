var hello = require('./printHello.js')
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('몇 번 반복 출력할까요? ', (answer) => {
    hello(answer)
    r1.close();
})
//console.log(hello(5))