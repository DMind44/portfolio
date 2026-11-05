# syntax=docker/dockerfile:1

FROM node:22-bookworm-slim AS build
# python3/make/g++ only matter if better-sqlite3 has no prebuilt for this platform;
# cheap in the discarded builder stage, guarantees the native build path works
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run generate

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.output/public /usr/share/nginx/html
