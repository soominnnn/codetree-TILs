const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();

const score = input[0].split(" ");
const average = (score.reduce((a, b) => Number(a) + Number(b)) / score.length).toFixed(1);

if(average >= 4.0) {
    console.log(average);
    console.log("Perfect");
}
else if(average >= 3.0) {
    console.log(average);
    console.log("Good");
}
else {
    console.log(average);
    console.log("Poor");
}