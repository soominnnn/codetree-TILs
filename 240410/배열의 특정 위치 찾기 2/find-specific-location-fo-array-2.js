const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const odd = input.filter((_, index) => index % 2 !== 0).reduce((a, b) => Number(a) + Number(b));
const even = input.filter((_, index) => index % 2 === 0).reduce((a, b) => Number(a) + Number(b));
const result = even > odd ? even - odd : odd - even;

console.log(result);