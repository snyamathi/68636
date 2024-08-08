ARG NODE_VERSION
FROM node:$NODE_VERSION
WORKDIR /app

COPY package* /app/
RUN npm ci

COPY app /app/app
RUN npm run build

CMD ["npm", "start"]
