## Stage 1
FROM node:14.16-alpine as node

## ENV NODE_OPTIONS --max-old-space-size=8192

WORKDIR /app

#COPY ./client/package.json .

#RUN npm cache clean --force
#RUN npm install

#COPY ./client/ .

#RUN npm run build


# stage 2
FROM nginx:alpine
# Remove the default nging.conf
RUN rm /etc/nginx/conf.d/default.conf

# Replace with our own nginx.conf
COPY nginx.conf /etc/nginx/conf.d/

# Copy angular static files
#COPY --from=node /app/www /usr/share/nginx/html=
COPY  nginx.conf /etc/nginx/conf.d/default.conf


