const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

class Product {
    constructor(name = "codetree", code = "50") {
        this.name = name;
        this.code = code;
    }
}

const product = new Product();
console.log(`product ${product.code} is ${product.name}`);

product.name = input[0];
product.code = input[1];

console.log(`product ${product.code} is ${product.name}`);