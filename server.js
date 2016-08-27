'use strict';

const Koa = require('koa');
const logger = require('koa-morgan');
const serve = require('koa-static');

const app = new Koa();

app.use(logger('dev'));
app.use(serve('./dist'));

app.listen(3000);
console.log('Server listening on port 3000');
