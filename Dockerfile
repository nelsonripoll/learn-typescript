FROM node:14

RUN npm install --global typescript@3.5.1

COPY . /usr/src

WORKDIR /usr/src

EXPOSE 8888
