/*
 * working with arrays
 */
let names = ["Hats", "Boots", "Gloves"];
console.log(names); // [ 'Hats', 'Boots', 'Gloves' ]
console.log(...names); // Hats Boots Gloves

let prices = [100, 200, 300];
console.log(prices); // [ 100, 200, 300 ]
console.log(...prices); // 100 200 300

console.log(`First Item: ${names[0]}: ${prices[0]}`); // First Item: Hats: 100

totalPrice = sumPrices(...prices);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // Total: 600 number

let combinedArray = [...names, ...prices];
console.log(combinedArray); //[ 'Hats', 'Boots', 'Gloves', 100, 200, 300 ]
console.log(...combinedArray); // Hats Boots Gloves 100 200 300
