FROM node:14.16-alpine

WORKDIR /app

# copy configs to /app folder
COPY package.json .

RUN npm install

ADD . /app

RUN npm run build

# check files list
RUN ls -la /

CMD ["npm", "start"]
#CMD [ "node", "./lib/index.js" ]
