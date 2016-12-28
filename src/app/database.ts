import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

export default class Database {

    private static _instance : Database = new Database();

    protected _knex:any = null;

    protected _bookshelf : any = null;

    constructor() {
        if(Database._instance){
            throw new Error("Error: Instantiation failed: Use Database.getInstance() instead of new.");
        }

        //@todo pull config info from knexfile.js!!
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

    public getKnex(): any
    {
        return this._knex;
    }

    public getBookshelf(): Bookshelf
    {
        return this._bookshelf;
    }
}