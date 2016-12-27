import Database from '../database';

var db = Database.getInstance();
var bookshelf = db.getBookshelf();

class User extends bookshelf.Model<User> {
    get tableName() { return 'users'; }
}