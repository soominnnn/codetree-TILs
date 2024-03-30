const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

class Bomb {
    constructor(code, color, second) {
        this.code = code;
        this.color = color;
        this.second = second;
    }
}

const bomb = new Bomb(input[0], input[1], input[2]);

console.log(`code : ${bomb.code}`);
console.log(`color : ${bomb.color}`);
console.log(`second : ${bomb.second}`);