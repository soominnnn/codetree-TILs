const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

class Agent {
    constructor(codeName = "", score = 0) {
        this.codeName = codeName;
        this.score = score;
    }
}

let agent = Array(5).fill(new Agent());

for(let i = 0; i < input.length; i++) {
    const [codeName, score] = input[i].split(" ");

    agent[i] = new Agent(codeName, +score);
}

console.log(`${agent[0].codeName} ${agent[0].score}`);