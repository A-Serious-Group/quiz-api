FROM node:18.17.1

RUN apt-get update && apt-get install -y procps && rm -rf /var/lib/apt/lists/*

RUN npm i -g @nestjs/cli

WORKDIR /usr/src/app

USER node

COPY . .

EXPOSE 3000

COPY ./start-development.sh /entrypoint.sh
ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]