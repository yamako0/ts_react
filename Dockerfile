FROM nginx:1.15.2-alpine

RUN apk --update add \
    curl \
    nodejs \
    nodejs-npm

COPY ./nginx/default.conf etc/nginx/conf.d

WORKDIR /usr/share/nginx/html

COPY . .

EXPOSE 25000
