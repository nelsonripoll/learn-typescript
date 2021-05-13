/*
 * checking variable types
 */
let myVariable;
console.log(`Type of myVariable: ${typeof myVariable}`); // typeof undefined

myVariable = "Nelson";
console.log(`Type of myVariable: ${typeof myVariable}`); // typeof string

myVariable = 100;
console.log(`Type of myVariable: ${typeof myVariable}`); // typeof number

myVariable = false;
console.log(`Type of myVariable: ${typeof myVariable}`); // typeof boolean

myVariable = null;
console.log(`Type of myVariable: ${typeof myVariable}`); // typeof object
// null values as objects is a long-standing behavior of javascript

/*
 * unintentional type coercion example
 */
let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`); // logs 100

let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`); // logs 100

if (hatPrice == bootsPrice) { // double equal sign only looks at value, not type
  console.log("Prices are the same");
} else {
  console.log("Prices are different");
}
// Prices are the same

let totalPrice = hatPrice + bootsPrice;
console.log(`Total Price: ${totalPrice}`); // logs 100100

/*
 * avoiding unintentional type coercion
 */
// triple equal sign checks both value and type
if (hatPrice === bootsPrice) { 
  console.log("Prices are the same");
} else {
  console.log("Prices are different");
}
// Prices are different

totalPrice = Number(hatPrice) + Number(bootsPrice);
console.log(`Total Price: ${totalPrice}`); // logs 200

/*
 * explicity applied type coercion example
 */
let firstCity; // undefined
let secondCity = firstCity || "San Antonio"; // values coerced into booleans, 0, null, and undefined coerced to false
console.log(`City: ${secondCity}`); // logs San Antonio

let numeric0 = 0; // numeric 0 coerced to false
let string0 = "0"; // string 0 coerced to true
let results = numeric0 || string0 || "fallback";

console.log(`Results: ${results}`); // logs 0
console.log(`Type of results: ${typeof results}`); // typeof string
