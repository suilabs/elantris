FROM node:carbon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY package-lock.json /usr/src/app

RUN npm install
RUN npm run build-css
RUN npm run build

ENV VIRTUAL_HOST=preprod.suilabs.com
ENV LETSENCRYPT_HOST=preprod.suilabs.com
ENV LETSENCRYPT_EMAIL=borja.arias.upc@gmail.com

EXPOSE 5000

CMD [ "npm", "run", "serve" ]
