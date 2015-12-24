'use strict';

const Koa = require('koa');
const convert = require('koa-convert');
const logger = require('koa-morgan');
const serve = require('koa-static');

const app = new Koa();

app.use(logger('dev'));
app.use(convert(serve('.')));

app.listen(3000);
console.log('Server listening on port 3000');
