# Этап сборки фронтенда
FROM node:18-alpine as frontend

WORKDIR /app
COPY frontend/package*.json ./
RUN npm ci --omit=dev
COPY frontend/ .
RUN npm run build

# Этап сборки Tauri
FROM rust:1.70-alpine as tauri

RUN apk add --no-cache \
    musl-dev \
    openssl-dev \
    g++ \
    webkit2gtk-dev \
    gtk+3.0-dev \
    librsvg-dev \
    clang

WORKDIR /app
COPY --from=frontend /app/dist ./dist
COPY src-tauri/Cargo.toml src-tauri/Cargo.lock ./
COPY src-tauri/src ./src

RUN cargo build --release

# Финальный образ
FROM alpine:3.18

COPY --from=tauri /app/target/release/app /usr/local/bin/app

CMD ["app"]