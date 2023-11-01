set -e

_kill_procs() {
  kill -TERM $node
}
npm install

npx prisma generate

# npx prisma db push

chown -Rf node:node ./

npm run build

npm run start:dev $@ &
node=$!

wait $node