# Learning Typescript

Examples and notes from this project are taken from the following sources:

*Essential TypeScript: From Beginner to Pro*
ISBN-13 (electronic): 978-1-4842-4979-6


## Build and Run Container

### Docker

```
docker build -t learn-typescript .
docker run -dt --name learn-typescript localhost/learn-typescript
```

### Buildah / Podman

```
buildah bud -f Dockerfile -t learn-typescript
podman run -dt --name learn-typescript localhost/learn-typescript
```

## Running Projects

### ToDo

Execute ```/bin/bash``` inside the container with an interactive terminal.

#### Docker
```
podman exec --interactive --tty --workdir /usr/src/todo learn-typescript /bin/bash
```

#### Podman
```
podman exec --interactive --tty --workdir /usr/src/todo learn-typescript /bin/bash
```

#### Run ToDo Project
Install packages from ```npm``` and execute the typescript compiler. Run the
 project with ```nodejs``` from the ```dist``` folder.

```
npm install
tsc
node dist/index.js
```
