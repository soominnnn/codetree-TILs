const fs= require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const includeThreeArray = input.filter(el => el % 3 === 0);
const index = input.indexOf(includeThreeArray[0]);

console.log(input[index - 1]);