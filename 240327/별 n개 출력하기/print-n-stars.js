const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const result = '*\n'.repeat(input);

console.log(result);