class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price; 
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

class GiftPack {
  constructor(name, ...products) {
    this.name = name; 
    this.products = products;
  }

  *[Symbol.iterator]() {
    yield* this.products;
  }

  getTotalPrice() {
    return this.products.reduce((total, p) => total + p.price, 0);
  }
}

let hat = new Product("Hat", 100);
let boots = new Product("Boots", 80);
let gloves = new Product("Gloves", 23);

let winter = new GiftPack("winter", hat, boots, gloves);

console.log(`Total price: ${ winter.getTotalPrice() }`);

[...winter].forEach((p) => { console.log(`Product: ${p}`) });