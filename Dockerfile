FROM node:latest

RUN npm install express
RUN mkdir -p /opt/project

COPY src /opt/project/src
COPY public /opt/project/public




WORKDIR /opt/project/src
ENTRYPOINT ["node", "app.js"]