# Use uma imagem oficial do Node.js como base
FROM node:16

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código fonte da aplicação para o container
COPY . .

# Expõe a porta que o aplicativo irá rodar
EXPOSE 3000

# Define o comando padrão para rodar o servidor
CMD ["npm", "start"]
