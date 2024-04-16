const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const [n, m] = [+input[0], +input[1]];
const sentence = '* '.repeat(m) +'\n';
const result = sentence.repeat(n);

console.log(result);