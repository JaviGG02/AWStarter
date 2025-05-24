FROM node:18-alpine as build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]