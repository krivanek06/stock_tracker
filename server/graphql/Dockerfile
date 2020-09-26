FROM node:12

#RUN mkdir /app

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

ENV PORT=18081

EXPOSE 18081

CMD ["npm", "start"]