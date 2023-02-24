FROM ubuntu:22.04
RUN apt-get update && apt-get install -y nodejs && apt-get install -y npm && npm install
WORKDIR /var/www
COPY . .
EXPOSE 3000
CMD node server.js 