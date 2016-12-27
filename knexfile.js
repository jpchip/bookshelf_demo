// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host     : '127.0.0.1',
      user     : 'postgres',
      password : 'Asdf1234!',
      database : 'postgres',
      charset  : 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
