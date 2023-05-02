FROM node:18

COPY ../. /rootDir

WORKDIR /rootDir/app

ARG NODE_ENV=test
ENV NODE_ENV=$NODE_ENV

RUN npm install
RUN npm build

CMD ["npm", "run", "test:ci"]

