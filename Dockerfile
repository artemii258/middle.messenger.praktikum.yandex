FROM ubuntu:22.04
RUN apk add --update nodejs npm npm install --force
WORKDIR /var/www
COPY . .
EXPOSE 3000
CMD node server.js 