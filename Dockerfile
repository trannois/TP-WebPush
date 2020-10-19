FROM node:latest

RUN apt update -y
RUN apt install -y sqlite3

RUN npm install express
RUN npm install sqlite3
RUN mkdir -p /opt/project

COPY src /opt/project/src
COPY public /opt/project/public




WORKDIR /opt/project/src
ENTRYPOINT ["node", "app.js"]