module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '127.0.0.1'),
      port: env.int('PGPORT', 6534),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'CM6ekiaufuA19gwZyV12'),
      ssl: env.bool(true),
    },
  },
})
