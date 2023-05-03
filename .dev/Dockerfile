FROM node:18

COPY ../. /dir

WORKDIR /app

RUN npm install
RUN npm build

CMD ["npm", "run", "test:ci"]

