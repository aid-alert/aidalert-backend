FROM node:latest AS builder

COPY ./app /app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN cd /app
RUN npm ci
RUN npm run build

FROM node:20-alpine3.16
COPY --from=builder /app/dist /bin

CMD [ "node", "/bin/index.js" ]