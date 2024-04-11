const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const array = ['L', 'E', 'B', 'R', 'O', 'S'];
const result = array.indexOf(input);

console.log(result === -1 ? 'None' : result);