const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const result1 = input.includes('ee') ? 'Yes' : 'No';
const result2 = input.includes('ab') ? 'Yes' : 'No';

console.log(result1, result2);