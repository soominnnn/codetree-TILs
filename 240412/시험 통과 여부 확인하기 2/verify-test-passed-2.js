const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

input.shift();

const passResult = input.map(el => {
    const score = el.split(' ');
    const sum = score.reduce((a, b) => Number(a) + Number(b), 0);
    const average = Math.floor(sum / 4);

    return average >= 60 ? 'pass' : 'fail';
});
const passCount = passResult.filter(el => el === 'pass').length;

console.log(passResult.join('\n') + '\n' + passCount);