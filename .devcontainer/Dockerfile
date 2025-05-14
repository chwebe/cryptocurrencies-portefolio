FROM node:23-bookworm-slim
RUN apt-get update && apt-get install -y bash
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm run setup
RUN mkdir -p dist
CMD ["tail", "-f", "/dev/null"]