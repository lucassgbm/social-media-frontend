# frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# COPY package*.json ./
# RUN npm install

COPY . .

EXPOSE 3000

# Apenas mantém o container em execução para acesso manual
CMD ["sh", "-c", "sleep infinity"]
