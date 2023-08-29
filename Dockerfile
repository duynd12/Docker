# FROM node

# WORKDIR /app

# COPY package.json /app

# RUN npm install

# COPY . /app
# EXPOSE 4000

# CMD ["node", "index.js"]


FROM node:18-alpine

WORKDIR /src
COPY package.json package-lock.json /src/
RUN npm install --production

COPY . /src

EXPOSE 8085

CMD ["node", "index.js"]

