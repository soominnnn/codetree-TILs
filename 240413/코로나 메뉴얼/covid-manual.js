const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const result = [];

for(let i = 0; i < input.length; i++) {
    const array = input[i].split(' ');

    if(array[0] === 'Y' && +array[1] >= 37) {
        result.push('A');
        continue;
    }
    if(array[0] === 'N' && +array[1] >= 37) {
        result.push('B');
        continue;
    }
    if(array[0] === 'Y' && +array[1] < 37) {
        result.push('C');
        continue;
    }
    result.push('D');
}

const emergency = result.filter(el => el ==='A').length;

console.log(emergency >= 2 ? 'E' : 'N');