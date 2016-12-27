"use strict";

import * as Koa from "koa";
import * as Router from "koa-router";
import * as path from 'path';
import User from './models/User';


var app = new Koa();
var router = new Router();
//app.use('/api/v1', api);

router.get('/', function *(next) {
    this.body = 'Hello world!!!';
});

router.get('/users', function *(next) {
    var self = this;
    this.body = yield User.fetchAll().then(function(users) {
        const usersJson = users.toJSON();
        return usersJson;
    });
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);