FROM node
RUN npm install
WORKDIR /var/www
COPY . .
EXPOSE 3000
CMD node server.js 