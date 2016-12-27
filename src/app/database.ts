import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

export default class Database {

    private static _instance : Database = new Database();

    private _knex:any = null;

    private _bookshelf : any = null;

    constructor() {
        if(Database._instance){
            throw new Error("Error: Instantiation failed: Use Database.getInstance() instead of new.");
        }

        this._knex = Knex({
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : 'Asdf1234!',
                database : 'postgres',
                charset  : 'utf8'
            }
        });

        this._bookshelf = Bookshelf(this._knex);

        Database._instance = this;
    }

    public static getInstance():Database
    {
        return Database._instance;
    }

    public static getKnex(): any
    {
        return this._knex;
    }

    public static getBookshelf(): any
    {
        return this._bookshelf;
    }
}