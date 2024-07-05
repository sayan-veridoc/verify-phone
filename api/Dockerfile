FROM node:18-alpine AS base

RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app
COPY ./apps/backend/package.json ./apps/backend/pnpm-lock.yaml ./
RUN pnpm install

FROM base AS build

WORKDIR /app
COPY ./apps/backend .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build
RUN pnpm prune --prod

FROM base AS deploy

WORKDIR /app
COPY --from=build /app/dist/ ./dist/
COPY --from=build /app/node_modules ./node_modules

EXPOSE 5000

CMD [ "node", "dist/main.js" ]