
export const knex = require("knex")({
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: 'luisguilherme1996',
      database: "postgres"
    },
  });
  