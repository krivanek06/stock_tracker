FROM node:14.16-alpine


# ENV NODE_OPTIONS=--max-old-space-size=8192
ENV NODE_OPTIONS --max-old-space-size=8192
# ENV PATH="./node_modules/.bin:$PATH"

WORKDIR /app
COPY package.json .

RUN npm cache clean --force
# RUN npm install @angular/cli -g
RUN npm install

COPY . .

# --environment $env
RUN npm run build
# RUN ng build --prod
