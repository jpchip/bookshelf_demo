# Bookshelf

Test REST API using Typescript, Koa, bookshelf, knex, postgresql

## Development

```
$ vagrant up
$ vagrant ssh
$ make start
```

Server available at:

http://192.168.250.254:3000/

Will watch for changes in the `src` directory.

## Database Migrations

Run migrations:

```
$ make migrate
```

Make new migration:

```
$ make migrate-make -- name_of_migration
```

Rollback:

```
$ make migrate-rollback
```

## API

### /

Hello World

### /users

Returns all users.