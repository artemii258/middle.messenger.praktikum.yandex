FROM ubuntu:22.04
RUN apt update && apt install -y nodejs && apt install -y npm 
WORKDIR /var/www
COPY . .
EXPOSE 3000
CMD node server.js 