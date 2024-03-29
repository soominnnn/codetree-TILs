const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = input.shift();
const array = input[0].split(" ");

function gcd(a, b) {
    if(b === 0){
        return a;
    }

    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function findLcm(arr, n) {
    if(n === 1) {
        return arr[0];
    }
    
    return lcm(arr[n - 1], findLcm(arr, n - 1));
}

console.log(findLcm(array, +n));