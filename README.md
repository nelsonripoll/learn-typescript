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

| Name              | Description                                                                     |
| ----------------- | ------------------------------------------------------------------------------  |
| dist              | contains the output from the compiler                                           |
| node_modules      | contains the packages that the application and development tools require        |
| src               | contains the source code files that will be compiled by the TypeScript compiler |
| package.json      | contains the set of top-level package dependencies for the project              |
| package-lock.json | contains a complete list of the package dependencies for the project            |
| tsconfig.json     | contains the configuration settings for the TypeScript compiler                 |

### Using the Node Package Manager

TypeScript and JavaScript development depends on a rich ecosystem of packages. Most TypeScript projects will require packages that
 provide the TypeScript compiler; the application framework, if one is used; and the tools required to package the compiled code
 so that it can be distributed and executed.

NPM is used to download these packages and add them to the project's *node_modules* folder. Each package declares a set of dependencies
 on other packages and specifies the versions that it can work with. NPM follows this chain of dependencies, working out which versions
 of each package is needed and downloads everything that is required. The *package.json* file is used to keep track of the packages
 that have been added using the *npm install* command. The basic content of the file is created by the *npm init* command.

Packages used during development are installed with the *--save-dev* flag and are recorded in the *devDependencies* section of the 
 *package.json* file. Packages that are included in the application are installed without the *--save-dev* flag and are stored in
 the section named *dependencies*.

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

| Command                                | Description                                                                                                                                         |
| -------------------------------------  | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| npm install                            | performs a local install of the packages specified in the *package.json* file                                                                       |
| npm install package@version            | performs a local install of a specific version of a package and updates the *package.json* file to add the package to the *dependencies* section    |
| npm install --save-dev package@version | performs a local install of a specific version of a package and updates the *package.json* file to add the package to the *devDependencies* section |
| npm install --global package@version   | performa a global install of a spcecific version of a package                                                                                       |
| npm list                               | list all the local packages and their dependencies                                                                                                  |
| npm run                                | execute one of the scripts defined in the *package.json* file                                                                                       |
| npx package                            | runs the code contained in a package                                                                                                                |


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