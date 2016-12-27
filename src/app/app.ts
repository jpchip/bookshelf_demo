"use strict";

import * as Koa from "koa";
import * as Router from "koa-router";
import * as path from 'path';
import * as User from './models/User';


var app = new Koa();
var router = new Router();
//app.use('/api/v1', api);

router.get('/', function *(next) {
    this.body = 'Hello world!!';
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);