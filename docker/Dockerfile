FROM node:alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install -s

COPY . /app

EXPOSE 3000

RUN yarn run generate:translations

CMD [ "yarn", "start" ]