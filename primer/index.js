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


/*
 * unintentional type coercion with a function
 */
function sumPrices (first, second, third) {
  return first + second + third;
}

totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 100100undefined string

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 600 number

totalPrice = sumPrices(100, 200); // third value is set to undefined
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // NaN number


/*
 * avoid argument mismatch with default parameter
 */
sumPrices = function (first, second, third = 0) {
  return first + second + third;
}

totalPrice = sumPrices(100, 200); // third value is set to 0
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 300 number


/*
 * avoid argument mismatch with rest parameter and filters
 */
sumPrices = function (...numbers) {
  let reducer = function (accumulator, currentValue) {
    currentValue = (Number.isNaN(Number(currentValue)) ? 0 : Number(currentValue));
    return accumulator + currentValue;
  }
  let initialValue = 0;
  
  return numbers.reduce(reducer, initialValue);
}

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 600 number

totalPrice = sumPrices(100, 200, undefined, false, "hello");
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 300 number


/*
 * sumPrices as arrow functions
 */
sumPrices = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator + (Number.isNaN(Number(currentValue)) ? 0 : Number(currentValue)));

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 600 number

totalPrice = sumPrices(100, 200, undefined, false, "hello");
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 300 number


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


/*
 * working with objects
 */
let hat = {
  name: "Hat",
  price: 100
}
console.log(hat); // { name: 'Hat', price: 100 }


let boots = {
  name: "Boots",
  price: "100"
}
console.log(boots); // { name: 'Boots', price: '100' }

totalPrice = sumPrices(hat.price, boots.price);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`); // 200 number

let propertyCheck = hat.price || 0;
let objectAndPropertyCheck = (hat || {}).price || 0; 
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);

let otherHat = { ...hat };


/*
 * chaining constructor functions
 */
let Product = function(name, price) { 
  this.name = name;
  this.price = price;
}

Product.prototype.toString = function() {
  return `toString: Name: ${this.name}, Price: ${this.price}`;
}

let TaxedProduct = function(name, price, taxRate) { 
  Product.call(this, name, price);
  this.taxRate = taxRate;
}

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype); // set TaxedProduct prototype to Product prototype

TaxedProduct.prototype.getPriceIncTax = function() { 
  return Number(this.price) * Number(this.taxRate);
}

TaxedProduct.prototype.toString = function() {
  let chainResult = Product.prototype.toString.call(this);
  return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
}

hat = new TaxedProduct("Hat", 100, 1.2);
boots = new Product("Boots", 100);

console.log(hat.toString());   // toString: Name: Hat, Price: 100, Tax: 120
console.log(boots.toString()); // toString: Name: Boots, Price: 100

console.log(`hat and Product: ${ hat instanceof Product}`);     // hat and Product: true
console.log(`boots and Product: ${ boots instanceof Product}`); //boots and Product: true

console.log(`hat and TaxedProduct: ${ hat instanceof TaxedProduct}`);     // hat and TaxedProduct: true
console.log(`boots and TaxedProduct: ${ boots instanceof TaxedProduct}`); // boots and TaxedProduct: false

/*
 * creating and using a static method
 */
Product.process = (...products) => products.forEach(p => console.log(p.toString()));

Product.process(new Product("Hat", 100, 1.2), new Product("Boots", 100));

/*
 * using classes
 */
class NewProduct {
  constructor(name, price) {
    this.name = name;
    this.price = price; 
  }
  
  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

class NewTaxedProduct extends Product {
  constructor(name, price, taxRate = 1.2) { 
    super(name, price);
    this.taxRate = taxRate;
  }

  getPriceIncTax() {
    return Number(this.price) * this.taxRate;
  }

  toString() {
    let chainResult = super.toString();
    return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
  }

  static process(...products) {
    products.forEach(p => console.log(p.toString()));
  }
}

hat = new NewTaxedProduct("Hat", 100);
boots = new NewTaxedProduct("Boots", 100, 1.3);

console.log(hat.toString()); 
console.log(boots.toString());

NewTaxedProduct.process(
  new NewTaxedProduct("Hat", 100, 1.2), 
  new NewTaxedProduct("Boots", 100)
);