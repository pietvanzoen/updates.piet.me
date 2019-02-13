FROM node:alpine

ENV NODE_ENV production
WORKDIR app

COPY ./package.json ./yarn.lock /app/
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

CMD ["yarn", "start"]
