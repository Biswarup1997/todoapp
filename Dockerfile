FROM node:current-alpine3.22

WORKDIR /practice

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm" , "start"]
