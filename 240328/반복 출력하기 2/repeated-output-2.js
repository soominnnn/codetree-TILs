const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let result = '';

function printHello(n) {
    if(n === 0){
        return;
    }

    printHello(n-1);
    result += 'HelloWorld\n';
}

printHello(+input);
console.log(result);