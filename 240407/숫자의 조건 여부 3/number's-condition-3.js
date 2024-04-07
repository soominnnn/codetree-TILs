const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

console.log(+input % 13 === 0 || +input % 19 === 0 ? "True" : "False");