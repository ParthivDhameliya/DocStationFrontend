FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install -g npm@10.2.4

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start", "--host", "0.0.0.0"] 