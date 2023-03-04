FROM node
WORKDIR /var/www
COPY package.json /var/www/
RUN npm install
COPY . .
EXPOSE 3000
CMD node server.js 