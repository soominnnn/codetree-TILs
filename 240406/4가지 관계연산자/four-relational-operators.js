const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = [+input[0], +input[1]];
let result = '';

result += a >= b ? "1\n" : "0\n";
result += a > b ? "1\n" : "0\n";
result += a <= b ? "1\n" : "0\n";
result += a < b ? "1\n" : "0\n";

console.log(result);