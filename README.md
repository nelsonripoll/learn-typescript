# Getting Started with TypeScript

TypeScript is a superset of the JavaScript language that focuses on producing safe and predictable code that can be executed
 by any JavaScript runtime. TypeScript's headline features are focused on developer productivity through the use of static 
 types, access control keywords, and a concise class constructor syntax.

The TypeScript package includes a compiler that processes TypeScript files and produces pure JavaScript that can be executed
 by a JavaScript runetime, such as Node.js or a browser. Some TypeScript features are implemented entirely by the compiler
 and leave no trace in the JavaScript code. Other features are implemented by building on standard JavaScript and performing
 additional checks during compilation. TypeScript enhances JavaScript, but the result is still JavaScript, and development
 in a TypeScript project is largely a process of writing JavaScript code.

Examples and notes from this project are taken from the following sources:

*Essential TypeScript: From Beginner to Pro*
ISBN-13 (electronic): 978-1-4842-4979-6

## JavaScript Primer

The building blocks for JavaScript code are statements, which are executed in the order they are defined. The *let* keyword
 is used to define variables (as opposed to the *const* keyword, which defines constant values) followed by a name. The value
 of the variable is set using the assignment operator (the equal sign) followed by a value.

JavaScript provides some build-in objects to perform common tasks, such as writing strings to th command prompt with the
 *console.log* method. Strings can be defined as literal values, using single or double quotes, or as template strings, using
 backtick characters and inserting expressions into the template using the dollar sign and braces.

### Understanding JavaScript Types

The foundation for the JavaScript language language is a set of built-in types:

| Number    | Primitive | Description                                                                                                           |
| --------- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| number    | Yes       | This is used to represent numeric values. JavaScript doesn't differentiate between integer and floating-point values. |
| string    | Yes       | This type is used to represent text data.                                                                             |
| boolean   | Yes       | This type can have *true* and *false* values.                                                                         |
| symbol    | Yes       | This type is used to represent unique constant values, such as keys in collections.                                   |
| null      | Yes       | This type can be assigned only the value *null* and is used to indicate a nonexistent or invalid reference.           |
| undefined | Yes       | This type is used when a variable has been defined but has not been assigned a value.                                 |
| object    | No        | This type is used to represent compound values, formed from individual properties and values.                         |

The *typeof* keyword identifies a value's type and produces the following output when the code is executed. When the *typeof* keyword
 is used on *null*, the result is *object*.

**code:**
```
let myVariable = "string";
console.log(`Type of myVariable: ${typeof myVariable}`);

myVariable = 100;
console.log(`Type of myVariable: ${typeof myVariable}`);

myVariable = null;
console.log(`Type of myVariable: ${typeof myVariable}`);
```

**results:**
```
Type of myVariable: string
Type of myVariable: number
Type of myVariable: object
```

The way JavaScript deals with types can be confusing. When an operator is applied to values of different types, the JavaScript 
 runtime converts one value into an equivalent value in the other type, a process known as type coercion.

**code:**
```
let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);

let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

if (hatPrice == bootsPrice) { 
  console.log("Prices are the same");
} else {
  console.log("Prices are different");
}

let totalPrice = hatPrice + bootsPrice;
console.log(`Total Price: ${totalPrice}`);
```

**results:**
```
Hat price: 100
Boots price: 100
Prices are the same
Total Price: 100100
```

The double equal sign performs a comparison using type coercion so that JavaScript will try to convert the values it is working with
 in order to produce a useful result. This is known as the JavaScript *abstract equality comparison*, and when a number is compared
 to a string, the string value is converted to a number value, and then the comparison is performed. When you use the plus operator,
 if either of the values is a string, the other value is converted to a string, and both string values are concatenated.

There are ways to prevent coersion. The double equal sign performs a comparison that applies type coercion. The triple equal sign
 applies a strict comparison that will return *true* only if the values have the same type and are equal. To prevent string
 concatenation, values can be explicitly converted to numbers before the plus operator is applied using the build-in *Number()*
 function.

**code:**
```
let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);

let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

if (hatPrice === bootsPrice) { 
  console.log("Prices are the same");
} else {
  console.log("Prices are different");
}

let totalPrice = Number(hatPrice) + Number(bootsPrice);
console.log(`Total Price: ${totalPrice}`);
```

**results:**
```
Hat price: 100
Boots price: 100 
Prices are different 
Total Price: 200
```

Type coercion can be useful if applied explicitly. When using a logical AND/OR operator, values are coerced into booleans. If the value
 is *0*, *null*, or *undefined*, they are coerced into *false* values. This method can be used as a way to provide fallback values.

**code:**
```
let firstCity;
let secondCity = firstCity || "San Antonio";
let thirdCity = 0 || "Austin";
console.log(`First City: ${ firstCity }`);
console.log(`Second City: ${ secondCity }`);
console.log(`Third City: ${ thirdCity }`);
```

**results:**
```
undefined
San Antonio
Austin
```

One thing to note is a numeric *0* will be coerced to *false* while a string *"0"* will be coerced to true.

**code:**
```
let numeric0 = 0;
let string0 = "0";
let results = numeric0 || string0 || "fallback";

console.log(`Results: ${results}`)
console.log(`Type of results: ${typeof results}`);
```

**results:**
```
0
Type of results: string
```

The fluid approach that JavaScript takes to types is followed through in other parts of the language, including functions. The types
 of a function's parameters are determined by the values that are used to invoke it. JavaScript doesn't enforce a match between the
 number of parameters defined and the number of arguments used to invoke it. Any parameter for which a value is not provided will be
 *undefined*. Using the plus operator, if one value is a string all values are converted into strings, even *undefined*, and thus will
 be concatenated together. If all values are numbers, the sum of all values will be returned. If *undefined* is being used in addition
 with another number, JavaScript coalesces *undefined* to a special number value *NaN* (Not a Number). The result of addition that
 includes *NaN* will be *NaN*, which means the type of the result is a number but the value isn't useful and is unlikely to be what
 was intended.

**code:**
```
let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);

let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

function sumPrices(first, second, third) {
  return first + second + third;
}

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice}`);

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
```

**results:**
```
Hat price: 100
Boots price: 100
Total: 100100undefined
Total: 600 number
Total: NaN number
```

One way to avoid argument mismatch is to use a default parameter value.

**code:**
```
function sumPrices(first, second, third = 0) {
  return first + second + third;
}

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice}`);

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
```

**results:**
```
Total: 1001000 string
Total: 600 number
Total: 300 number
```

A more flexible approach is a rest parameter, which is prefixed with three periods (...) and must be the last parameter
 defined by the function. A reset parameter is an array containing all the arguments for which parameters are not defined.
 To ensure the function produces a useful sum of its parameter values, however they are received, they can be converted
 to numbers and filtered to remove any that are *NaN*.

**code:**
```
function sumPrices(...numbers) {
  let reducer = function (accumulator, currentValue) => {
    currentValue = (Number.isNaN(Number(currentValue)) ? 0 : Number(currentValue));
    return accumulator + currentValue;
  }
  let initialValue = 0;
  
  return numbers.reduce(reducer, initialValue);
}

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice}`);

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
```

**results:**
```
Total: 100100 string
Total: 600 number
Total: 300 number
```

### Working with Arrays

JavaScript arrays can be dynamically resized and can contain any combination of values and types. The size of an array is 
 not specified when it is created and will be allocated automatically as items are added or removed. JavaScript arrays are 
 zero-based and are defined using square brackets, optionally with the initial contents separated by commas.

**useful array methods**
| Method                | Description                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| concat(otherArray)    | returns a new array that concatenates the array the method was called on with the array in the argument |
| join(separator)       | joins all elements in the array to form a string using the argument as a delimiter                      |
| pop()                 | removes and returns the last item in the array                                                          |
| shift()               | removes and returns the first element in the array                                                      |
| push(item)            | appends the specified item to the end of the array                                                      |
| unshift(item)         | inserts a new item at the start of the array                                                            |
| reverse()             | returns a new array that contains the items in reverse order                                            |
| slice(start, end)     | returns a section of the array                                                                          |
| sort()                | sorts the array                                                                                         |
| splice(index, count)  | removes count items from the array, starting at the specified index                                     |
| every(test)           | calls the test function for each item and returns true if the function returns true for all items       |
| some(test)            | method returns true if calling the test function for each item returns true at least once               |
| filter(test)          | method returns a new array containing the items for which the test function returns true                |
| find(test)            | returns the first item for which the test function returns true                                         |
| findIndex(test)       | returns the index of the first item for which the test function returns true                            |
| forEach(callback)     | invokes the callback function for each item in the array                                                |
| includes(value)       | returns true if the array contains the specified value                                                  |
| map(callback)         | returns a new array containing the result of invoking the callback function for each item               |
| reduce(callback)      | returns the accumulated value produced by invoking the callback function for each item                  |

The spread operator can be used to expand the contents of an array so that its elements can be used as arguments to a function. It
 can also be used to expand the contents of an array for easy concatenation.

**code:**
```
let sumPrices = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator + (Number.isNaN(Number(currentValue)) ? 0 : Number(currentValue)));

let names = ["Hats", "Boots", "Gloves"];
console.log(names);
console.log(...names);

let prices = [100, 200, 300];
console.log(prices);
console.log(...prices);

console.log(`First Item: ${names[0]}: ${prices[0]}`);

let totalPrice = sumPrices(..prices);
console.log(`Total: ${totalPrice}`);

let combinedArray = [...names, ...prices];
console.log(combinedArray);
console.log(...combinedArray);

[ 'Hats', 'Boots', 'Gloves', 100, 200, 300 ]
Hats Boots Gloves 100 200 300
```

**results:**
```
[ 'Hats', 'Boots', 'Gloves' ]
Hats Boots Gloves
[ 100, 200, 300 ]
100 200 300
First Item: Hats 100
Total: 600
```

### Working with Objects

JavaScript objects are collections of properties, each of which has a name and a value. The simplest way to define an object is to use
 the literal syntax. The literal syntax uses braces to contain a list of property names and values. Names are separated from their values
 with colons and from other properties with commas. Like the rest of JavaScript, objects are dynamic. Properties can be added and removed, 
 and values of any type can be assigned to properties.

**code:**
```
let hat = {
  name: "Hat",
  price: 100
}
console.log(hat);


let boots = {
  name: "Boots",
  price: "100"
}
console.log(boots);

let totalPrice = Number(hat.price) + Number(boots.price);
console.log(`Total: ${totalPrice}`);

let gloves = {
  productName: "Gloves", 
  price: "40"
}
console.log(gloves);

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20;
console.log(gloves);

let propertyCheck = hat.price || 0;
let objectAndPropertyCheck = (hat || {}).price || 0; 
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);
```

**results:**
```
{ name: 'Hat', price: 100 }
{ name: 'Boots', price: '100' }
200
{ productName: 'Gloves', price: '40' }
{ name: 'Gloves', price: '20' }
Checks: 100, 100
```

The spread operator can be used to expand the properties and values defined by an object, which makes 
 it easy to create one object based on the properties defined by another. The spread operator can also
 be combined with other properties to add, replace, or absorb properties from the source object.

**code:**
```
let hat = {
  name: "Hat",
  price: 100 
};

let boots = {
  name: "Boots",
  price: "100"
}

let otherHat = { ...hat };
console.log(`Spread: ${JSON.stringify(otherHat)}`);

let additionalProperties = { ...hat, discounted: true}; 
console.log(`Additional: ${JSON.stringify(additionalProperties)}`);

let replacedProperties = { ...hat, price: 10}; 
console.log(`Replaced: ${JSON.stringify(replacedProperties)}`);

let { price , ...someProperties } = hat; 
console.log(`Selected: ${JSON.stringify(someProperties)}`);
```

**results:**
```
Spread: {"name":"Hat","price":100}
Additional: {"name":"Hat","price":100,"discounted":true} 
Replaced: {"name":"Hat","price":10}
Selected: {"name":"Hat"}
```

Getters and setters are functions that are invoked when a property value is read or assigned.

**code:**
```
let hat = {
  name: "Hat",
  _price: 100, 
  priceIncTax: 100 * 1.2,

  set price(newPrice) {
    this._price = newPrice; this.priceIncTax = this._price * 1.2;
  },

  get price() {
    return this._price;
  }
};

let boots = { 
  name: "Boots",
  price: "100",

  get priceIncTax() {
    return Number(this.price) * 1.2;
  }
}

console.log(`Hat: ${hat.price}, ${hat.priceIncTax}`); 
hat.price = 120;
console.log(`Hat: ${hat.price}, ${hat.priceIncTax}`);

console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`); 
boots.price = "120";
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
```

**results:**
```
Hat: 100, 120
Hat: 120, 144
Boots: 100, 120
Boots: 120, 144
```

Objects can have methods as properties as well. All the features and behaviors that functions provide, such as default
 and rest parameters, can be used for methods. The *function* keyword and colon that separates a property name from its
 value are omitted, allowing methods to be defined in a style that manay develoeprs find natural.

**code:**
```
let hat = { 
  name: "Hat",
  _price: 100, 
  priceIncTax: 100 * 1.2,

  set price(newPrice) {
    this._price = newPrice; this.priceIncTax = this._price * 1.2;
  },

  get price() {
    return this._price;
  },

  writeDetails: function() {
    console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
  }
};

hat.writeDetails(); 
hat.price = 120; 
hat.writeDetails();
```

**results:**
```
Hat: 100, 120
Hat: 120, 144
```

## Understanding the this Keyword

The *this* keyword can be used in any function, even when that function isn't used as a method. JavaScript
 defines a global object, which can be assigned values that are available throughout an application. The
 global object is used to provide access to the essential features in the execution environment, such  as 
 the *document* object in browsers that allows interaction with the Document Object Model API. Values 
 assigned names without using *let*, *const*, or *var* keyword are assigned to the global object.
 
Functions are objects, which means they define methods, including the *call* method. It is this method that
 is used to invoke a function behind the scenes. The first argument to the *call* method is the value for
 *this*, which is set to the global object. The name of the global object changes based on the execution
 environment. In code executed by Node.js, *global* is used, but *window* or *self* will be required in
 browsers.

When a function is invoked as an object's method, *this* is set to the object. *this* is set differently if
 the function is accessed outside of its object, which can happen if the function is assigned to a variable.
 Functions can be used like any other value, including assigning them to variables outside of the object in
 which they were defined. If the function is invoked through the variable, then *this* will be set to the
 global object. Arrow functions don't have their own *this* value and inherit the closest value of *this* 
 they can find when they are executed.

### Understanding JavaScript Object Inheritance

JavaScript objects have a link to another object, known as the *prototype*, from which they inherit properties
 and methods. Since prototypes are objects and have their own prototype, objects form an inheritance chain that
 allows complex features to be defined once and used consistently. When an object is created using the literal
 syntax, its prototype is *Object*, which is a built-in object provided by JavaScript. *Object* provides some
 basic features that all objects inherit. One feature includes a method name *toString* that returns a string
 representation of an object. Object is the prototype for most objects, but it also provides some methods that
 are used directly, rather than through inheritance, and which can be used to get information about prototypes.
 Prototypes are regular JavaScript objects, new properties can be defined on prototypes, and new values can be
 assigned to existing properties. Because objects maintain a link to their prototype, changing the value of one
 could change it for other objects.

| Name                | Description                                     |
| ------------------- | ----------------------------------------------- |
| getPrototypeOf      | returns an object's prototype                   |
| setPrototypeOf      | changes the prototype of an object              |
| getOwnPropertyNames | returns the names of an object's own properties |

**code:**
```
let hat = { 
  name: "Hat",
  price: 100,
  
  getPriceIncTax() {
    return Number(this.price) * 1.2; 
  }
};

let boots = { 
  name: "Boots",
  price: 100,
  
  getPriceIncTax() {
    return Number(this.price) * 1.2; 
  }
}

let hatPrototype = Object.getPrototypeOf(hat); 
console.log(`Hat Prototype: ${hatPrototype}`);

let bootsPrototype = Object.getPrototypeOf(boots); 
console.log(`Boots Prototype: ${bootsPrototype}`);

console.log(`Common prototype: ${ hatPrototype === bootsPrototype}`);

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax() }`);
console.log(`toString: ${hat.toString()}`);

hatPrototype.toString = function() {
  return `toString: Name: ${this.name}, Price: ${this.price}`;
}

console.log(hat.toString()); 
console.log(boots.toString());
```

**results:**
```
Hat Prototype: [object Object] 
Boots Prototype: [object Object] 
Common prototype: true
Hat: 100, 120
toString: [object Object]
toString: Name: Hat, Price: 100
toString: Name: Boots, Price: 100
```

Changes to *Object* should be made cautiosly because they affect all the other objects in the application. A
 better approach is to create a prototype specifically for the use of your application. Prototypes can be
 defined just like any other object. The effect is a chain of prototypes that the JavaScript works its way
 along until it locates a property or method or reaches the end of the chain.

**code:**
```
let ProductProto = {
  toString: function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`; 
  }
}

let hat = { 
  name: "Hat",
  price: 100,
  
  getPriceIncTax() {
    return Number(this.price) * 1.2; 
  }
}

let boots = { 
  name: "Boots",
  price: 100,
  
  getPriceIncTax() {
    return Number(this.price) * 1.2; 
  }
}

let gloves = {
  name: "Gloves",
  price: 100,
  
  getPriceIncTax() {
    return Number(this.price) * 1.2; 
  }
}

Object.setPrototypeOf(hat, ProductProto);
Object.setPrototypeOf(boots, ProductProto);

console.log(hat.toString()); 
console.log(boots.toString());
console.log(gloves.toString());
```

**results:**
```
toString: Name: Hat, Price: 100
toString: Name: Boots, Price: 100
toString: [object Object]
```

A constructor function is used to create a new object, configure its properties, and assign its prototype,
 all of which is done in a single step with the *new* keyword. Constructor functions can be used to ensure
 that objects are created consistently and that the correct prototype is applied. Constructor functions
 are invoked with the *new* keyword, followed by the function or its variable name and the arguments that
 will be used to configure the object. The JavaScript runtime creates a new object and uses it as the *this*
 value to invoke the constructor function, providing the argument values as parameters. The prototype for 
 the new object is set to the object returned by the *prototype* property of the constructor function.

**code:**
```
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

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function() { 
  return Number(this.price) * Number(this.taxRate);
}

TaxedProduct.prototype.toString = function() {
  let chainResult = Product.prototype.toString.call(this);
  return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
}

hat = new TaxedProduct("Hat", 100, 1.2);
boots = new Product("Boots", 100);

console.log(hat.toString());
console.log(boots.toString());

console.log(`hat and Product: ${ hat instanceof Product}`); 
console.log(`boots and Product: ${ boots instanceof Product}`);

console.log(`hat and TaxedProduct: ${ hat instanceof TaxedProduct}`);
console.log(`boots and TaxedProduct: ${ boots instanceof TaxedProduct}`);
```

**results:**
```
toString: Name: Hat, Price: 100, Tax: 120
toString: Name: Boots, Price: 100
hat and Product: true
boots and Product: true
hat and TaxedProduct: true
boots and TaxedProduct: false
```

Properties and methods that are defined on the constructor function are often referred to as *static*, meaning
 they are accessed through the constructor and not individual objects created by that constructor (as opposed
 to *instance properties*, which are accessed through an object). The *Object.setPrototypeOf* and *Object.getPrototypeOf*
 methods are good examples of *static* methods.

**code:**
```
let Product = function(name, price) { 
  this.name = name;
  this.price = price;
}

Product.prototype.toString = function() {
  return `toString: Name: ${this.name}, Price: ${this.price}`;
}

Product.process = (...products) => products.forEach(p => console.log(p.toString()));
Product.process(new Product("Hat", 100, 1.2), new Product("Boots", 100));
```

**results:**
```
toString: Name: Hat, Price: 100
toString: Name: Boots, Price: 100
```

JavaScript classes are implemented using prototypes. Classes are defined with the *class* keyword, followed by a name
 for the class. The class syntax may appear more familiar, but classes are translated into the underlying JavaScript
 prototype system. Objects are created from classes using the *new* keyword. The JavaScript runtime creats a new object
 and invokes the class *constructor* function, which receives the new object through the *this* value and which is
 responsible for defining the object's own properties.

Classes can inherit features using the *extends* keyword and invoke the superclass constructor and methods using the
 *super* keyword. A class declares its superclass using the *extends* keyword. The *super* keyword is used in the
 constructor to invoke the superclass constructor, which is equivalent to chaining constructor functions. The *super*
 keyword must be used before the *this* keyword and is generally used in the first statement in the constructor. The
 *super* keyword can also be used to access superclass properties and methods. The *static* keyword is applied to
 create static methods that are accessed through the class, rather than the object it creates.

**code:**
```
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price; 
  }
  
  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

class TaxedProduct extends Product {
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

  static process(..products) {
    products.forEach(p => console.log(p.toString()));
  }
}

let hat = new TaxedProduct("Hat", 100);
let boots = new TaxedProduct("Boots", 100, 1.3);

console.log(hat.toString()); 
console.log(boots.toString());

TaxedProduct.process(new TaxedProduct("Hat", 100, 1.2), new TaxedProduct("Boots", 100));
```

**results:**
```
toString: Name: Hat, Price: 100, Tax: 120
toString: Name: Boots, Price: 100, Tax: 130
toString: Name: Hat, Price: 100, Tax: 120
toString: Name: Boots, Price: 100, Tax: 120
```

### Using Iterators and Generators

Iterators are objects that return a sequence of values. Iterators are used with the or can be useful in 
 their own right. An iterator defines a function named *next* that returns an object with *value* and *done* 
 properties: the *value* property returns the next value in the sequence, and the *done* property is set to 
 *true* when the sequence is complete.

**code:**
```
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

while (!result.done) {
  console.log(result.value.toString());
  result = iterator.next(); 
}
```

**results:**
```
toString: Name: Hat, Price: 100
toString: Name: Boots, Price: 100
toString: Name: Umbrella, Price: 23
```

Iterators has to maintain state data to keep track of the current position in the sequence each
 time the next function is invoked. A simpler approach is to use a generator, which is a function
 that is invoked once and uses the *yield* keyword to produce the values in the sequence. Generator
 functions are denoted with an asterisk. Generators are consumed in the same way as iterators. The 
 JavaScript runtime creates the *next* function and executes the generator function until it reaches 
 the *yield* keyword, which provides a value in the sequence. Execution of the generator function 
 continues gradually each time the *next* function is invoked. When there are no more *yield* 
 statements to execute, an object whose *done* property is set to *true* is created automatically.
 Generators can be used with the spread operator, allowing the sequence to be used as a set of
 function parameters or to populate an array.

**code:**
```
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price; 
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  } 
}

function* createProductIterator() { 
  yield new Product("Hat", 100); 
  yield new Product("Boots", 100); 
  yield new Product("Umbrella", 23);
}

[...createProductIterator()].forEach(p => console.log(p.toString()));
```

**results:**
```
toString: Name: Hat, Price: 100
toString: Name: Boots, Price: 100
toString: Name: Umbrella, Price: 23
```

Stand-alone functions are iterators and generators can be useful, but the most common requirement is for an object
 to provide a sequence as part of some broader function functionality. The *Symbol.iterator* property is used to
 denote the default iterator for an object and allows the object to be iterated directly. The *yield\** expression 
 iterates over the operand and yields each value returned by it.

**code:**
```
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
```

**results:**
```
Product: toString: Name: Hat, Price: 100
Product: toString: Name: Boots, Price: 100
Product: toString: Name: Umbrella, Price: 23
```

### Using JavaScript Collections

JavaScript provides dedicated collection objects. Objects can be used as collections, where each property is a key/value
 pair, with the property name being the key. Object provides useful methods for getting the set of keys or values from an
 object.

| Name                  | Description                                                           |
| --------------------- | --------------------------------------------------------------------- |
| Object.keys(object)   | Returns an array containing the property names defined by the object  |
| Object.values(object) | Returns an array containing the property values defined by the object |

**code:**
```
class Product {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

let data = {
  hat: new Product("Hat", 100)
}

data.boots = new Product("Boots", 100);

Object.keys(data).forEach(key => console.log(data[key].toString()));
```

**results:**
```
toString: Name: Hat, Price: 100
toString: Name: Boots, Price: 100
```

JavaScript also provides *Map*, which is purpose-build for storing data using keys of any type. The API
 provided by *Map* allows items to be stored and retrieved, and iterators are available for the keys
 and values.

| Name            | Description                                              |
| --------------- | -------------------------------------------------------- |
| set(key, value) | stores a value with the specified key                    |
| get(key)        | retrieves the value stored with the specified key        |
| keys()          | returns an iterator for the keys in the *Map*            |
| values()        | returns an iterator for the values in the *Map*          |
| entries()       | returns an iterator for the key/value pairs in the *Map* |

**code:**
```
class Product {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

let data = new Map();
data.set("hat", new Product("Hat", 100));
data.set("boots", new Product("Boots", 100));

[...data.keys()].forEach(key => console.log(data.get(key).toString()));
```

**results:**
```
toString: Name: Hat, Price: 100
toString: Name: Boots, Price: 100
```

The main advantage of using a *Map* is that any value can be used as a key, including *Symbol* values. Each
 *Symbol* value is unique and immutable and ideally suited as an identifier for objects.

**code:**
```
class Product {
  constructor(name, price) {
    this.id = Symbol();
    this.name = name;
    this.price = price;
  }
}

class Supplier {
  constructor(name, productids) {
    this.name = name;
    this.productids = productids;
  }
}

let acmeProducts = [new Product("Hat", 100), new Product("Boots", 100)];
let zoomProducts = [new Product("Hat", 100), new Product("Boots", 100)];

let products = new Map();

[...acmeProducts, ...zoomProducts].forEach(p => products.set(p.id, p));

let suppliers = new Map();

suppliers.set("acme", new Supplier("Acme Co", acmeProducts.map(p => p.id)));
suppliers.set("zoom", new Supplier("Zoom Shoes", zoomProducts.map(p => p.id)));

suppliers.get("acme").productids.forEach(id => console.log(`Name: ${products.get(id).name}`));
```

**results:**
```
Name: Hat
Name: Boots
```

JavaScript also provides *Set*, which stores data by index and stores only unique values. The need to
 allow or prevent duplicate values is the reason to choose between an array and a *Set*.

| Name              | Description                                    |
| ----------------- | ---------------------------------------------- |
| add(value)        | adds the value to the *Set*                    |
| entries()         | returns an iterator for the items in the *Set* |
| has(value)        | returns *true* if the *Set* contains the value |
| forEach(callback) | invokes a function for each value in the *Set* |

**code:**
```
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
```

**results:**
```
Array length: 5
Set size: 1
```

### Using Modules

Each JavaScript module is contained in its own JavaScript file. The *export* keyword is used to
 denote the features that will be available outside the module. By default, the contents of the 
 JavaScript file are private and must be explicitly shared using the *export* keyword before they
 can be used in the rest of the application. The *default* keyword is used when the module contains
 a single feature.

The *import* keyword is required to declare a dependency on the module. It is followed by an identifier,
 which is the name by which the features in the module will be known when it is used. The *from* keyword
 follows the identifier, which is then followed by the location of the module. During the build process,
 the JavaScript runtime will detect the *import* statement and will load the contents of the module.

**module:**
```
export default function(price) { 
  return Number(price) * 1.2;
}
```

**code:**
```
import calcTax from "./module/tax";

class Product {
  constructor(name, price) {
    this.id = Symbol(); this.name = name; this.price = price;
  } 
}

let product = new Product("Hat", 100);
let taxedPrice = calcTax(product.price);

console.log(`Name: ${ product.name }, Taxed Price: ${taxedPrice}`);
```

**results:**
```
Name: Hat, Taxed Price: 120
```

A module can assign names to the features it exports. A module can export default and named features.
 This is a common pattern with frameworks where the core features are provided by the default export
 of a module and optional features are available as named exports.

**module:**
```
export function calculateTax(price) {
  return Number(price) * 1.2;
}

export default function calcTaxandSum(...prices) {
  return prices.reduce((total, p) => total += calculateTax(p), 0);
}
```

**code:**
```
import calcTaxAndSum, { calculateTax } from "./modules/tax";

console.log(`Calculate Tax: ${calculateTax(100)}`);
console.log(`Calculate Tax and Sum: ${calculateTaxAndSum(100, 200)}`);
```

**results:**
```
Calculate Tax: 120
Calculate Tax And Sum: 360
```

## Using the TypeScript Compiler

### Understanding the Project Structure

### Using the Node Package Manager

### Understanding the TypeScript Compiler Configuration File

### Compiling TypeScript Code

### Using the Version Targeting Feature

### Selecting a Module Format

### Useful Compiler Configuration Settings



## Testing and Debugging TypeScript

### Debugging TypeScript Code

### Using the TypeScript Linter

### Unit Testing TypeScript




# Running Projects

## Build and Run Container

### Docker

```
docker build -t learn-typescript .
docker run -dt -v $(pwd)/todo:/usr/src --name learn-typescript learn-typescript
```

### Buildah / Podman

```
buildah bud -f Dockerfile -t learn-typescript
podman run -dt -v $(pwd)/todo:/usr/src --name learn-typescript localhost/learn-typescript
```

## ToDo

### Docker

Install, Compile, and Run
```
docker exec --interactive --tty --workdir /usr/src/todo learn-typescript /bin/bash -c 'npm install'
docker exec --interactive --tty --workdir /usr/src/todo learn-typescript /bin/bash -c 'tsc && node dist/index.js'
```

Install, Compile, and Run
### Podman
```
podman exec --interactive --tty --workdir /usr/src/todo learn-typescript /bin/bash -c 'npm install'
podman exec --interactive --tty --workdir /usr/src/todo learn-typescript /bin/bash -c 'tsc && node dist/index.js'
```

## Primer

### Docker

Install, Compile, and Run
```
docker exec --interactive --tty --workdir /usr/src/primer learn-typescript /bin/bash -c 'npm install'
docker exec --interactive --tty --workdir /usr/src/primer learn-typescript /bin/bash -c 'tsc && node dist/index.js'
```