# Specify a base image
FROM node:alpine

# Specifying the work directory and copying contents

WORKDIR /usr/app
COPY ./ /usr/app

#Install some dependencies

RUN npm install

# Set up a default command
CMD [ "npm","start" ]