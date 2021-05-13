class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price; 
  }
  
  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  } 
}

function createProductIterator() {
  const hat = new Product("Hat", 100);
  const boots = new Product("Boots", 100); 
  const umbrella = new Product("Umbrella", 23);

  let lastVal;

  return {
    next() {
      switch (lastVal) {
        case undefined:
          lastVal = hat;
          return { value: hat, done: false };
        case hat:
          lastVal = boots;
          return { value: boots, done: false };
        case boots:
          lastVal = umbrella;
          return { value: umbrella, done: false };
        case umbrella:
          return { value: undefined, done: true };
      } 
    }
  } 
}


let iterator = createProductIterator(); 
let result = iterator.next();

console.log(iterator);
console.log(result);

while (!result.done) {
  console.log(result.value.toString());
  result = iterator.next(); 
}