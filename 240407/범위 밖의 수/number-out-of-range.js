const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

console.log(+input < 10 || +input > 20 ? "yes" : "no");