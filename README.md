# bookshelf_demo

An example REST API using Typescript, Koa, Bookshelf, Knex, Postgresql.

A playground for me to test out how these libraries work together.

## Development

```
$ vagrant up
$ vagrant ssh
$ cd /vagrant && make start
```

Server is available at:

http://192.168.250.254:3000/

Will watch for changes to *.ts files in the `src` directory.

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

Run seeds:

```
$ make seed
```

Make seed:

Note: they are run in alphabetical order.

```
$ make seed-make -- name_of_seed
```

## API

### /

Hello World

### GET /users

Returns all users.

### GET /users/{id}

Returns a single user with given id

### POST /users

Creates a new user.

Example Body:
```
{
    "username":"joe",
    "password":"123456"
}
```