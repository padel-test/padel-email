FROM node:latest
MAINTAINER Fran
COPY . /
WORKDIR /

RUN npm install
CMD ["npm", "start"]
