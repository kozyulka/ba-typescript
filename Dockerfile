FROM node:8

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
RUN npm run-script build

CMD [ "node", "dist/bundle.js" ]
