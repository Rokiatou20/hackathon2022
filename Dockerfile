FROM node:alpine3.14

# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
# add app
COPY . ./

# COPY package.json ./
# COPY package-lock.json ./
RUN npm i -timeout=9999999