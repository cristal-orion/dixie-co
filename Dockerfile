# --- Build stage: Astro static output ---
FROM node:22-alpine AS build
WORKDIR /app

# Solo package.json: npm install fresco per i binari nativi Linux corretti
# (niente package-lock.json — vedi regole Coolify)
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

# --- Serve stage: Nginx ---
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4321
CMD ["nginx", "-g", "daemon off;"]
