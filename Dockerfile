# Base on offical Node.js Alpine image
FROM node:14-alpine

# Set working directory
WORKDIR /usr/app

RUN apk --no-cache add --virtual builds-deps build-base python3

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install


# Copy .env shell file
#COPY ./generate-env-production.sh ./

# Generate ENV variables
#RUN chmod +x ./generate-env-production.sh
#RUN /bin/sh ./generate-env-production.sh

# Copy all files
COPY ./ ./

# Display .env 
# RUN cat .env

# Build Node App
RUN npm run build

# RUN cat /usr/app/.next/service-worker.js

# Expose the listening port
#EXPOSE ${PORT}
EXPOSE 3000
EXPOSE ${PORT}

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# CMD ["cat", ".env" ]

# Run npm start script with PM2 when container starts
CMD ["npm", "start" ]
