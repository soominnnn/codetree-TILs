const ft= 9.2;
const ftToCm = 30.48;
const mi = 1.3;
const miToCm = 160934
const ftResult = (ft * ftToCm).toFixed(1);
const miResult = (mi * miToCm).toFixed(1);

console.log(`${ft}ft = ${ftResult}cm`);
console.log(`${mi}mi = ${miResult}cm`);