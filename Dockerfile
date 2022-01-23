# Base on offical Node.js Alpine image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files

# Install dependencies



# Copy .env shell file
#COPY ./generate-env-production.sh ./

# Generate ENV variables
#RUN chmod +x ./generate-env-production.sh
#RUN /bin/sh ./generate-env-production.sh

# Copy all files
COPY . /app
RUN npm install



# RUN cat /usr/app/.next/service-worker.js

# Expose the listening port
EXPOSE 3000
EXPOSE ${PORT}

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image

# Run npm start script with PM2 when container starts
CMD ["npm", "start" ]
