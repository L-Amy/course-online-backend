let Router = require('koa-router')();

const demo = require('./demo');
Router.use('/get',demo.routes(),demo.allowedMethods());

module.exports = Router;