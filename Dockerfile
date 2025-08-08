# Etap 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps \ 
    && npm install typescript@4.9.5 ajv@8.12.0 ajv-keywords@5.1.0 styled-components @types/styled-components --save-dev --legacy-peer-deps

COPY . .
RUN npm run build

# Etap 2: Production
FROM nginx:1.25-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "demon off;"]