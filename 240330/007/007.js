const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

class Secret {
    constructor(secretCode, meetingPoint, time) {
        this.secretCode = secretCode;
        this.meetingPoint = meetingPoint;
        this.time = time;
    }
}

const secretInfo = new Secret(input[0], input[1], input[2]);

console.log(`secret code : ${secretInfo.secretCode}`);
console.log(`meeting point : ${secretInfo.meetingPoint}`);
console.log(`time : ${secretInfo.time}`);