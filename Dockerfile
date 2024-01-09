# Use an official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install


# Build the TypeScript code
RUN npm run build:ts

# Expose the port your application listens on
EXPOSE 3000


CMD ["npm", "run", "start"]


