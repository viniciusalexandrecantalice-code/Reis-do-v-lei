FROM node:18-slim

RUN apt-get update && apt-get install -y \
    curl \
    chromium \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Baixa o hbinit.js oficial do site do Haxball simulando um navegador
RUN curl -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -o hbinit.js https://www.haxball.com/hbinit.js

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

COPY package.json ./
RUN npm install

COPY bot.js ./

CMD ["node", "bot.js"]
