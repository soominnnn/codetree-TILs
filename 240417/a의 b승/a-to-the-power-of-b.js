const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const [a, b] = [+input[0], +input[1]];

console.log(a ** b);