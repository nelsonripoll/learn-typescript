# Learning Typescript

Examples and notes from this project are taken from the following sources:

*Essential TypeScript: From Beginner to Pro*
ISBN-13 (electronic): 978-1-4842-4979-6

## Docker

```
docker build -t learn-typescript .
docker run -it --rm --name learn-typescript -v "$PWD":/usr/src -w /usr/src learn-typescript /bin/bash
```
