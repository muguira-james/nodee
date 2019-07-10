FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY server.js .
COPY wait-for-it.sh .

RUN chmod +x wait-for-it.sh


expose 8090
