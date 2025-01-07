# Use the official Node.js image as the base image
FROM node:18-alpine

RUN apk add --no-cache openssl

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json, package-lock.json, and prisma directory
COPY package*.json ./
COPY prisma ./prisma

# Install dependencies
RUN npm install

# Run prisma generate
RUN npx prisma generate

# Copy the rest of the app code
COPY . .


# Expose the port the app runs on
EXPOSE 3000

# Command to start the app, currently running in development mode 
CMD ["npm", "run", "dev"]
