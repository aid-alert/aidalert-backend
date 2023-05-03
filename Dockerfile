FROM node:latest AS builder

COPY ./app /app

WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN npm install
RUN npm run build

FROM node:20-alpine3.16
COPY --from=builder /app/dist /bin/app

CMD [ "node", "/bin/app/index.js" ]