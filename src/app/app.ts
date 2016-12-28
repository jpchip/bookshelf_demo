"use strict";

import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import * as path from 'path';
import User from './models/User';

var app = new Koa();
var router = new Router();

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

router.get('/users/:id', function *(next) {
    var self = this;
    this.body = yield new User().where({id : this.params.id}).fetch().then(function(user) {
        const userJson = user.toJSON();
        return userJson;
    });
});

router.post('/users', function *(next) {
    this.body = yield new User(this.request.body).save().then(function(user) {
       return user.toJSON();
    });
});

app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);