# Learning Typescript

Examples and notes from this project are taken from the following sources:

*Essential TypeScript: From Beginner to Pro*
ISBN-13 (electronic): 978-1-4842-4979-6

## Understanding TypeScript

TypeScript is a superset of the JavaScript language that focuses on producing safe and predictable code that can be executed
 by any JavaScript runtime. TypeScript's headline features are focused on developer productivity through the use of static 
 types, access control keywords, and a concise class constructor syntax.

The TypeScript package includes a compiler that processes TypeScript files and produces pure JavaScript that can be executed
 by a JavaScript runetime, such as Node.js or a browser. Some TypeScript features are implemented entirely by the compiler
 and leave no trace in the JavaScript code. Other features are implemented by building on standard JavaScript and performing
 additional checks during compilation. TypeScript enhances JavaScript, but the result is still JavaScript, and development
 in a TypeScript project is largely a process of writing JavaScript code.

### JavaScript Primer

The building blocks for JavaScript code are statements, which are executed in the order they are defined. The *let* keyword
 is used to define variables (as opposed to the *const* keyword, which defines constant values) followed by a name. The value
 of the variable is set using the assignment operator (the equal sign) followed by a value.

JavaScript provides some build-in objects to perform common tasks, such as writing strings to th command prompt with the
 *console.log* method. Strings can be defined as literal values, using single or double quotes, or as template strings, using
 backtick characters and inserting expressions into the template using the dollar sign and braces.

#### Understanding JavaScript Types

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

### Using the TypeScript Compiler

### Testing and Debugging TypeScript

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

## Running Projects

### ToDo

#### Docker

Install, Compile, and Run
```
docker exec --interactive --tty --workdir /usr/src/todo learn-typescript /bin/bash -c 'npm install'
docker exec --interactive --tty --workdir /usr/src/todo learn-typescript /bin/bash -c 'tsc && node dist/index.js'
```

Install, Compile, and Run
#### Podman
```
podman exec --interactive --tty --workdir /usr/src/todo learn-typescript /bin/bash -c 'npm install'
podman exec --interactive --tty --workdir /usr/src/todo learn-typescript /bin/bash -c 'tsc && node dist/index.js'
```

### Primer

#### Docker

Install, Compile, and Run
```
docker exec --interactive --tty --workdir /usr/src/primer learn-typescript /bin/bash -c 'npm install'
docker exec --interactive --tty --workdir /usr/src/primer learn-typescript /bin/bash -c 'tsc && node dist/index.js'
```