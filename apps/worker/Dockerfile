FROM node:20

WORKDIR /app

COPY ./apps/worker/package*.json  ./apps/worker/tsconfig.json ./apps/worker/tsconfig.build.json ./worker/

COPY ./apps/worker/src ./worker/src

WORKDIR /app/worker
RUN npm install

RUN npm run build

CMD ["node", "dist/main.js"]
