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

## Using the TypeScript Compiler

The TypeScript compiler is responsible for transforming TypeScript code into JavaScript that can be executed by browsers or the
 Node.js runtime.

### The Project Structure

| Name | Description |
| ---- | ----------- |
| dist | contains the output from the compiler |
| node_modules | contains the packages that the application and development tools require |
| src | contains the source code files that will be compiled by the TypeScript compiler |
| package.json | contains the set of top-level package dependencies for the project |
| package-lock.json | contains a complete list of the package dependencies for the project |
| tsconfig.json | contains the configuration settings for the TypeScript compiler |

### Using the Node Package Manager

TypeScript and JavaScript development depends on a rich ecosystem of packages. Most TypeScript projects will require packages that
 provide the TypeScript compiler; the application framework, if one is used; and the tools required to package the compiled code
 so that it can be distributed and executed.

NPM is used to download these packages and add them to the project's **node_modules** folder. Each package declares a set of dependencies
 on other packages and specifies the versions that it can work with. NPM follows this chain of dependencies, working out which versions
 of each package is needed and downloads everything that is required. The **package.json** file is used to keep track of the packages
 that have been added using the **npm install** command. The basic content of the file is created by the **npm init** command.

Packages used during development are installed with the **--save-dev** flag and are recorded in the **devDependencies** section of the 
 **package.json** file. Packages that are included in the application are installed without the **--save-dev** flag and are stored in
 the section named **dependencies**.

| Name       | Description                                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| tsc-watch  | this package watches the source code folder and runs the TypeScript compiler when there is a change and executes the compiled JavaScript code |
| typescript | this package contains the TypeScript compiler and its supporting tools                                                                        |

For each package, the *package.json* file includes details of the version numbers that are acceptable.

| Version Format | Description                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 3.5.1          | accept only the package with the exact matching version number                                                                         |
| *              | accepts any version of the package to be installed                                                                                     |
| >3.5.1 >=3.5.1 | accepts any version of the package that is greater than (or equal to) a given version                                                  |
| <3.5.1 <=3.5.1 | accepts any version of the package that is less than (or equal to) a given version                                                     |
| ~3.5.1         | accepts versions to be installed even if the patch level (the last of the three version numbers) doesn't match                         |
| ^3.5.1         | accepts versions to be installed even if the minor release (the second of the three version numbers) or the patch number doesn't match |

All NPM commands should be run inside the project folder, which is the one that contains the *package.json* file.

| Command | Description |
| ------- | ----------- |
| npm install | performs a local install of the packages specified in the *package.json* file |
| npm install package@version | performs a local install of a specific version of a package and updates the *package.json* file to add the package to the *dependencies* section |
| npm install --save-dev package@version | performs a local install of a specific version of a package and updates the *package.json* file to add the package to the *devDependencies* section |
| npm install --global package@version | performa a global install of a spcecific version of a package |
| npm list | list all the local packages and their dependencies |
| npm run | execute one of the scripts defined in the *package.json* file |
| npx package | runs the code contained in a package |

### Understanding the TypeScript Compiler Configuration File

The TypeScript compiler, **tsc**, is responsible for compiling TypeScript files and implementing its features. The result is pure JavaScript from which the TypeScript keywords and expressions have been removed. A configuration file name **tsconfig.json** is used to override the default settings and ensures a consistent configuration.

```
{
    "compilerOptions": {
        "target": "es2018",
        "outDir": "./dist",
        "rootDir": "./src"
    } 
}
```

| Name | Description |
| ---- | ----------- |
| compilerOptions | This section groups the settings that the compiler will use. |
| files | This settings specifies the files that will be compiled, which overrides the default behavior where the compiler searches for files to compile. |
| include | This setting is used to select files for compilation by pattern. If unspecified, files with the .ts, .tsx, and .d.ts extensions will be selected. |
| exclude | This setting is used to exclude files from compilation by pattern. |
| compileOnSave | When set to **true**, this setting is a hint to the code editor that it should run the compiler each time a file is saved. |

You can see the set of files that the compiler has found for compilation by using the **listFiles** option. The files displayed by the **listFiles** option
 include the type declarations that the compiler has located. As part of the discovery process, the TypeScript compiler looks for TypeScript files in the location
 specified by they **rootDir** setting in the **tsconfig.json** file.

```
tsc --listFiles
```

### Compiling TypeScript Code

The compiler checks the TypeScript code to make sure it confirms to the JavaScript language specification before it tries to enforce features like static types and 
 emits pure JavaScript code from which the TypeScript additions have been removed. In most respects, the TypeScript compiler works like any compiler. But there is
 one difference: by default, the compiler continues to emit JavaScript code even when it encounters an error. This behavior can be disabled by setting the
 **noEmitOnError** configuration setting to **true** in the **tsconfig.json** file. When the compiler runs, output will be generated only when there are no
 errors detected in the JavaScript code.

 The TypeScript compiler supports watch mode, where it monitors the project and automatically compiles files when a change is detected.

 ```
 tsc --watch
 ```

 The compiler's watch mode doesn't automatically execute compiled code. If you are using a web development framework such as React, Angular, or Vue.js, the TypeScript
  compiler is integrated onto a larger toolchain that will automatically execute the compiled code. The **ts-watch** package starts the compiler in watch mode,
  observes its output, and executes commands based on the compilation results. The **onsuccess** argument specifies a command that is executed when compilation
  succeeds without errors.

```
npx tsc-watch --onsuccess "node dist/index.js"
```

The TypeScript compiler doesn't respond to changes on all of its configuration properties, and there will be times when you will need to stop and then start the compiler.
 A more reliable method is to use the **scripts** section of the **package.json** file.

```
{
"name": "tools",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"start": "tsc-watch --onsuccess \"node dist/index.js\""
},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"tsc-watch": "^2.1.2",
"typescript": "^3.5.1"
}
}
```

```
npm start
```

### Using the Version Targeting Feature

The version of the JavaScript language targeted by the compiler is specified by the target setting in the **tsconfig.json** file.

```
{
    "compilerOptions": {
        "target": "es2018",
        "outDir": "./dist",
        "rootDir": "./src"
    } 
}
```

| Name | Description |
| ---- | ----------- |
| es3 | Third edition of the language specifiaction that was defined in December 1999. |
| es5 | Fifth edition of the language specification that was defined in December 2009. |
| es6 | Sixth edition of the language specification and added features such as classes and modules, arrow functions, and promises. |
| es2015 | Equivalent to ES6. |
| es2016 | Seventh edition of the language specification, which introduced the includes method for arrays and an exponentiation operator. |
| es2017 | Eighth edition of the language specification, which introduced features for inspecting objects and new keywords for asynchronous operations. |
| es2018 | Ninth edition of the language specification, which introduced the spread and rest operators and improvements for string handling and asynchronous operations. |
| esNext | Refers to the features that are expected to be included in the next edition of the specification. | 

The earlier versions of the ECMAScript standard were given numbers, but recent versions are named for the year in which they were completed. The biggest change happened
 partway through the definition of ES6/ES2015, which can be regarded as the start of "modern" JavaScript.

In this example, **es5** is specified, which means modern features such as the **let** keyword and fat-arrow function are not supported. When compiled, the **let** keyword
 has been replaced with **var**, and the fat-arrow function has been replaced with a traditional function.

**tsconfig.json**
```
{
    "compilerOptions": {
        "target": "es5",
        "outDir": "./dist",
        "rootDir": "./src",
        "noEmitOnError": true
    } 
}
```

**index.ts**
```
let printMessage = (msg: string): void => console.log(`Message: ${ msg }`);
let message = ("Hello, TypeScript");
printMessage(message);
```

**index.js**
```
var printMessage = function (msg) { return console.log("Message: " + msg); };
var message = ("Hello, TypeScript");
printMessage(message);
```

The **Map** was added to JavaScript as part of the ES2015 specification, and is not part of the ES5 specification. If you tried to use **Map** in ES5 and
 compiled, the following error will occur:

```
error TS2583: Cannot find name 'Map'. Do you need to change your
target library? Try changing the `lib` compiler option to es2015 or later.
6:50:49 AM - Found 2 errors. Watching for file changes.
```

To resolve this problem, I can target a later version of the JavaScript language, or I can change the type definitions used by the compiler with the **lib**
 configuration property.

```
{
    "compilerOptions": {
        "target": "es5",
        "outDir": "./dist",
        "rootDir": "./src",
        "noEmitOnError": true,
        "lib": ["es5", "dom", "es2015.collection"]
    } 
}
```

**values for the lib compiler options**
| Name | Description |
| ---- | ----------- |
| es6, es2016 | select the type definition files that correspond to a specific version |
| esnext | selects features that are proposed additions to the JavaScript specification |
| dom | selects type information files for the Domain Object Model (DOM) API that web applications use to manipulate the HTML content |
| dom.iterable | provides type information for the additions to the DOM API that allow iteration over HTML elements |
| sciphHost | selects type information for the Windows Script Host, which allows for automation on Windows systems |
| webworker | selects type information for the web worker feature, which allows web applications to perform background tasks |

**per-feature values for the lib compiler options**

| Name | Description |
| ---- | ----------- |
| es2015.core | includes type information for the main features introduced by ES2015 |
| es2015.collection | includes type information for the **Map** and **Set** collections |
| es2015.generator, es2015.iterable | include type information for the generator and iterator features |
| es2015.promise | includes type information for promises, which describe asynchronous actions |
| es2015.reflect | includes type information for the reflection features that provide access to properties and prototypes |
| es2015.symbol, es2015.symbol.wellknown | include type information about symbols |

### Selecting a Module Format

Modules were standardized as part of the ES2016 specification. When writing TypeScript code, the standardized module features are used.

The module system can be explicitely selected using the module setting in the **tsconfig.json** file.

```
{
    "compilerOptions": {
        "target": "es5",
        "outDir": "./dist",
        "rootDir": "./src",
        "noEmitOnError": true,
        "module": "commonjs"
    } 
}
```

| Name | Description |
| ---- | ----------- |
| none | disables modules |
| commonjs | selects the CommonJS module format, which is supported by Node.js |
| amd | selects the Asynchronous Module Definition (AMD), which is supported by the RequireJS module loader |
| system | selects the module format supported by the SystemJS module loader |
| umd | selects the Universal Module Definition module format |
| es2015, es6 | selects the module format specified in the ES2016 language specification |
| esnext | selects the module features that have been proposed for the next version of the JavaScript language |

The TypeScript compiler can use two different approaches to resolving dependencies on modules: **classic** and **Node**. **Classic** mode
 searches for modules in the local project. **Node** mode locates modules in the **node_modules** folder. The TypeScript compiler uses the
 classic resolution mode when the module property is set to **es2015**, **system**, or **amd**. For all other module settings, the Node
 resolution is used. A resolution style can be specified using the **moduleResolution** configuration property in the **tsconfig.json**
 file using the **classic** or **node** value.


## Testing and Debugging TypeScript

### Debugging TypeScript Code

The difficulty with debugging a TypeScript application is that the code being executed is the product of the compiler, which transforms the
 TypeScript code into pure JavaScript. To help the debugger correlate the JavaScript code with the TypeScript code, the compiler can generate
 file known as **source maps**, which can be enabled in the **tsconfig.json** file. The compiler will generate a map file, which has the **map**
 file extension, alongside the JavaScript files in the **dist** folder.

```
{
    "compilerOptions": { 
        "target": "es2018", 
        "outDir": "./dist", 
        "rootDir": "./src", 
        "noEmitOnError": true, 
        "module": "commonjs", 
        "sourceMap": true
    } 
}
```

Code editors that have good TypeScript support allow breakpoints to be added to code files. When a JavaScript application is executed through a
 debugger, execution halts when the **debugger** keyword is encountered, and control is passed to the developer, but the **debugger** keyword must
 be removed before deployment.

Node.js provides a basic integrated debugger using the **inspect** command.

```
node inspect dist/index.js
```

The debugger starts, loads the index.js file, and halts execution. Enter the **cont** command (or **c**) to resume execution, the debugger will
 halt again when the **debugger** statement is reached. Expressions can be executed to inspect the state of the application using the **exec**
 command, although expressions have to be quoted as strings.

```
< Debugger listening on ws://127.0.0.1:9229/698d3d43-a16d-4f9e-914f-f5c5995c9e7d
<
< For help, see: https://nodejs.org/en/docs/inspector
<
 ok
< Debugger attached.
<
Break on start in dist/index.js:2
  1 "use strict";
> 2 Object.defineProperty(exports, "__esModule", { value: true });
  3 const calc_1 = require("./calc");
  4 let printMessage = (msg) => console.log(`Message: ${msg}`);
debug> c
< Message: Hello, TypeScript
<
break in dist/index.js:7
  5 let message = ("Hello, TypeScript");
  6 printMessage(message);
> 7 debugger;
  8 let total = calc_1.sum(100, 200, 300);
  9 console.log(`Total: ${total}`);
debug> exec("printMessage")
[Function]
debug> exec("message")
'Hello, TypeScript'
debug> c
< Total: 600
<
< Waiting for the debugger to disconnect...
<
debug> .exit
```

**debug commands**
| Command | Description |
| ------- | ----------- |
| run, restart, r | Run the application or reconnect |
| kill | Kill a running application or disconnect |
| cont, c | Resume execution |
| next, n | Continue to next line in current file |
| step, s | Step into, potentially entering a function |
| out, o | Step out, leaving the current function |
| backtrace, bt | Print the current backtrace |
| list | Print the source around the current line where execution is currently paused |
| setBreakpoint, sb | Set a breakpoint |
| clearBreakpoint, cb | Clear a breakpoint |
| breakpoints | List all known breakpoints |
| breakOnException | Pause execution whenever an exception is thrown |
| breakOnUncaught | Pause execution whenever an exception isn't caught |
| breakOnNone | Don't pause on exceptions (this is the default) |
| watch(expr) | Start watching the given expression |
| unwatch(expr) | Stop watching an expression |
| watchers | Print all watched expressions and their current values |
| exec(expr) | Evaluate the expression and print the value |
| repl | Enter a debug repl that works like exec |
| scripts | List application scripts that are currently loaded |
| scripts(true) | List all scripts (including node-internals) |
| profile | Start CPU profiling session. |
| profileEnd | Stop current CPU profiling session. |
| profiles | Array of completed CPU profiling sessions. |
| profiles[n].save(filepath = 'node.cpuprofile') | Save CPU profiling session to disk as JSON. |
| takeHeapSnapshot(filepath = 'node.heapsnapshot') | Take a heap snapshot and save to disk as JSON. |

### Using the TypeScript Linter

A linter is a tool that checks code files using a set of rules that describe problems that cause confusion, produce unexpected results,
 or reduce the readability of the code. The standard linter for TypeScript is TSLint.

```
npm install --save-dev tslint@5.16.0
```

To create the configuration required to use the linter, add a file called **tslint.json**. The linter comes with preconfigured sets of rules
 that are specified using the **extends** setting.

```
{
    "extends": [ "tslint:recommended" ],
    "linterOptions": {
        "format": "verbose"
    }
}
```

| Name | Description |
| ---- | ----------- |
| tslint:recommended | intended for general TypeScript development |
| tslint:latest | extends recommended set to include recently defined rules |
| tslint:all | contains all of the linter's rules, which can produce a large number of linting errors |

The **linterOptions** settings select the **verbose** output format, which includes the name of the rules in the error messages, which
 is important at first to determine how to tailor the linting settings.

Lint rules can be disabled in the **tslint.json** file.

```
{
    "extends": ["tslint:recommended"],
    "linterOptions": {
        "format": "verbose"
    },
    "rules": {
        "eofline": false,
        "no-console": false,
        "prefer-const": false
    }
}
```

Lint rules can also be disabled in the code itself with a comment. This example tells the linter not to apply the **no-debugger** rule to the next code statement.

```
import { sum } from "./calc";

let printMessage = (msg: string): void =>  console.log(`Message: ${ msg }`);

let message = ("Hello, TypeScript");
printMessage(message);

// tslint:disable-next-line no-debugger
debugger;

let total = sum(100, 200, 300);
console.log(`Total: ${total}`);
```

### Unit Testing TypeScript

```
npm install --save-dev jest@24.7.1
npm install --save-dev @types/jest
npm install --save-dev ts-jest@24.0.2
```

The **jest** package contains the testing framework. The **@types/jest** package contains the type definitions for the Jest API, which means that tests can be written 
 in TypeScript. The **ts-jest package** is a plugin to the Jest framework and is responsible for compiling TypeScript files before tests are applied.

A file named **jest.config.js** is used to configure Jest. The **roots** setting is used to specify the location of the code files and unit tests. The **transform** 
 setting is used to tell Jest that files with the **ts** and **tsx** file extensions should be processed with the **ts-jest** package.

```
module.exports = {
    "roots": ["src"],
    "transform": {"^.+\\.tsx?$": "ts-jest"}
}
```

Tests are defined in files that have the **test.ts** file extension and are conventionally created alongside the code files. Tests are defined using the **test**
 function, which is provided by Jest. The arguments are the name of the test followed by the function that performs the test. Jest provides the **expect** function
 that is passed the result and used with a matcher function that specifies the expected result.

```
import { sum } from "./calc";

test("check result value", () => {
    let result = sum(10, 20, 30);
    expect(result).toBe(60);
});
```

**matcher functions**
| Name | Description |
| ---- | ----------- |
| toBe(value) | asserts that a result is the same as the specified value (does not need to be the same object) |
| toEqual(object) | asserts that a result is the same object as the specified value |
| toMatch(regexp) | asserts that a result matches the specified regular expression |
| toBeDefined() | asserts that the result has been defined |
| toBeUndefined() | asserts that the result has not been defined |
| toBeNull() | asserts that the result is null |
| toBeTruthy() | asserts that the result is truthy |
| toBeFalsy() | asserts that the result is falsy |
| toContain(substring) | asserts that the result contains the specified substring |
| toBeLessThan(value) | asserts that the result is less than the specified value |
| toBeGreaterThan(value) | asserts that the result is greater than the specified value |

Unit tests can be run as a one-off task or by using a watch mode that runs the tests when changes are detected.

```
npx jest --watchAll
```

# Running Projects

## Build and Run Container

### Docker

```
docker build -t learn-typescript .
docker run -dt -v $(pwd):/usr/src --name learn-typescript learn-typescript
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