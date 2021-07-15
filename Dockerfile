FROM node:14

RUN npm install --global typescript@3.5.1
RUN npm install --global tsc-watch@2.1.2

EXPOSE 8888
