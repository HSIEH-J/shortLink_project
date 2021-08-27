FROM node:14
ENV NODE_ENV production
COPY app.js package.json /app/
WORKDIR /app
RUN npm install && npm cache clean --force
EXPOSE 3000
CMD node app.js
