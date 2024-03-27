const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b, c] = [+input[0], +input[1], +input[2]];

console.log(b > a && c > b ? 1 : 0);