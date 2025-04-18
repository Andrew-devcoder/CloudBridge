FROM node:20

WORKDIR /app

COPY ./apps/api/package*.json  ./apps/api/tsconfig.json ./apps/api/tsconfig.build.json ./api/
COPY ./apps/api/src ./api/src

WORKDIR /app/api
RUN npm install

RUN npm run build

CMD ["node", "dist/main.js"]
