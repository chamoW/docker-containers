# Base image
FROM node:14.14.0-alpine

# Work directory
WORKDIR /usr/app

# Copy package.json to work directory
COPY package.json .

# Run comands to install dependencies
RUN npm install

# Copy all the rest files
COPY . .

# Default commando for the image
CMD [ "npm", "run", "start" ]
