# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the application's dependencies inside the container
RUN npm install

# Copy the application's source code from the current directory to the container
COPY . .

# Expose port 3000 to interact with the application
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]
