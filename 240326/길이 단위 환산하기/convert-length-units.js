const fs = require("fs");
let ft = fs.readFileSync(0).toString();
ft = Number(ft);
const ftToCm = 30.48;
const cm = ft * 30.48;

console.log((cm).toFixed(1));