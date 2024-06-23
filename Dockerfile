ARG NODE_VERSION="22.3.0"
ARG ALPINE_VERSION="3.20"
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS build
ARG TARGET_APP
WORKDIR /build
COPY package.json package-lock.json  ./
RUN npm i
COPY . ./
RUN npx nx run ${TARGET_APP}:build
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS execute
ARG TARGET_APP=${TARGET_APP}
ARG ALPINE_VERSION=${ALPINE_VERSION}
ARG NODE_VERSION=${NODE_VERSION}
# https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/
ENV NODE_ENV="production"
WORKDIR /app
COPY --from=build /build/dist/$TARGET_APP ./
RUN npm i
USER 3000:3010
ENTRYPOINT ["node"]
CMD ["main.js"]