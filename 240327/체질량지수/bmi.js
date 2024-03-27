const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const height = Number(input[0]);
const weight = Number(input[1]);
const bmi = Math.floor(weight / (height / 100) ** 2);

console.log(bmi >= 25 ? `${bmi}\nObesity` : bmi);