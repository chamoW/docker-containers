# Specify a basse image
FROM node:alpine

# Determinating the work directory
WORKDIR /usr/simple-app

# Copy a file and put on the current working directory
COPY ./app/package.json ./

# Install some dependencies
RUN npm install

# Copy resources
COPY ./app  ./

#Default command
CMD [ "npm", "start" ]
