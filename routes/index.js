let Router = require('koa-router')();

const demo = require('./demo');
const user = require('./user');
Router.use('/get',demo.routes(),demo.allowedMethods());
Router.use('/auth',user.routes(),user.allowedMethods());
module.exports = Router;