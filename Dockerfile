# Use uma imagem oficial do Node.js como base
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install

# Etapa 2: execução
FROM node:18
WORKDIR /app
COPY --from=builder /app ./
RUN npm install --production
EXPOSE 3000
CMD ["npm", "start"]