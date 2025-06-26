# Etapa 1: Build
FROM node:18-alpine AS builder

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de definición de paquetes
COPY package.json yarn.lock ./

# Si por accidente existe package-lock.json, lo eliminamos para evitar conflictos
RUN rm -f package-lock.json

# Instalar dependencias
RUN yarn install --frozen-lockfile

# Copiar el resto del código
COPY . .

# Generar build de Next.js
RUN yarn build

# Etapa 2: Producción
FROM node:18-alpine AS runner

# Establecer directorio de trabajo
WORKDIR /app

# Copiar el código necesario desde la etapa anterior
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

# Establecer variables de entorno para producción
ENV NODE_ENV=production

# Puerto por defecto de Next.js
EXPOSE 3000

# Comando por defecto
CMD ["yarn", "start"]
