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
