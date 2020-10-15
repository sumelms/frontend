FROM node:12.16.3

# RUN apt install curl

# RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
# RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# RUN apt update
RUN mkdir app

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

COPY . /app

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "run", "start" ]