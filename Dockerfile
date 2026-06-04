FROM node:20.19.3-alpine

WORKDIR /usr/src/pdf-jtp-demo

COPY . .

RUN npm install
RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3031
EXPOSE 3031

CMD [ "npm", "start" ]
