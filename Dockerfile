FROM node:latest AS builder

COPY ./app /app

WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN npm install
RUN npm run build

RUN rm -rf node_modules
RUN npm ci

CMD [ "node", "/app/index.js" ]