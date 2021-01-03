ERROR: npm ERR! Tracker "idealTree" already exists

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2021-01-03T10_03_50_965Z-debug.log
The command '/bin/sh -c npm install' returned a non-zero code: 1


#### This issue is happening due to changes in nodejs starting version 15. When no WORKDIR is specified, npm install is executed in the root directory of the container, which is resulting in this error. Executing the npm install in a project directory of the container specified by WORKDIR resolves the issue.

Use the following Dockerfile:
```
# Specify a base image
FROM node:alpine

#Install some dependencies

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

# Set up a default command
CMD [ "npm","start" ]
```
