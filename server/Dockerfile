FROM node:carbon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY src /usr/src/app/src
COPY package-lock.json /usr/src/app
COPY .babelrc /usr/src/app
COPY config.json /usr/src/app

VOLUME storage /usr/src/app/storage

ENV ENV=dev

RUN npm install
RUN npm run build:server

EXPOSE 4000

CMD [ "npm", "start" ]
