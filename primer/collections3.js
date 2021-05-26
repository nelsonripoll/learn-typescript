class Product {
  constructor(name, price) {
    this.id = Symbol(); 
    this.name = name; 
    this.price = price;
  }
}

let product = new Product("Hat", 100);
let productArray = [];
let productSet = new Set();

for (let i = 0; i < 5; i++) { 
  productArray.push(product); 
  productSet.add(product);
}

console.log(`Array length: ${productArray.length}`);
console.log(`Set size: ${productSet.size}`);