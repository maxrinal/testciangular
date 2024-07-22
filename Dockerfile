# https://stackoverflow.com/a/77851370
FROM node:20-slim as build

WORKDIR /app/src
COPY package*.json ./
RUN npm ci --ignore-scripts
COPY . ./
RUN npm run build

FROM node:20-slim
WORKDIR /usr/app
COPY --from=build /app/src/dist/testciangular ./
CMD node server/server.mjs
EXPOSE 4000


# docker build -t testciangular:latest .
# docker run -it --rm -P testciangular:latest 
