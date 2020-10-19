FROM node:latest

RUN npm install express
RUN mkdir -p /opt/project

COPY src /opt/project/src
COPY public /opt/project/public

EXPOSE 80

WORKDIR /opt/project/src
ENTRYPOINT ["node", "app.js"]