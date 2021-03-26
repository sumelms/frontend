# Build
FROM node:alpine as builder

WORKDIR /app

COPY package.json /app

COPY yarn.lock /app

RUN yarn install -s

COPY . /app

RUN npx browserslist@latest --update-db

RUN yarn run generate:translations

RUN yarn build

# Main
FROM nginx:stable

COPY --from=builder /app/build/ /usr/share/nginx/html