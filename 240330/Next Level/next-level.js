const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

class Character {
    constructor(id = "codetree", level = "10") {
        this.id = id;
        this.level = level;
    }
}

const character = new Character();

console.log(`user ${character.id} lv ${character.level}`);

character.id = input[0];
character.level = input[1];

console.log(`user ${character.id} lv ${character.level}`);