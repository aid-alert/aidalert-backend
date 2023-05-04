FROM node:latest

COPY . /app

WORKDIR /app

RUN npm i
RUN npm run build

RUN rm -rf node_modules

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
RUN npm ci

CMD [ "node", "dist/source/index.js" ]