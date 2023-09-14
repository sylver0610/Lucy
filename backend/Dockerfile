# Base image
FROM node:19

# Expose port to access server
EXPOSE 8080

# Set working directory so that all subsequent command runs in this folder
WORKDIR /app/backend

RUN npm i npm@latest -g

# Copy package json and install dependencies
COPY package*.json ./

RUN npm install

# Copy our app
COPY . .

# Command to run our app 
CMD [ "npm", "start"]