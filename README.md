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