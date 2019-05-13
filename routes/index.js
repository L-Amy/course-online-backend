let Router = require('koa-router')();

const demo = require('./demo');
const user = require('./user');
const teacher=require('./teacher');
const common=require('./common');
Router.use('/get',demo.routes(),demo.allowedMethods());
Router.use('/auth',user.routes(),user.allowedMethods());
Router.use('/teacher',teacher.routes(),user.allowedMethods());
Router.use('/common',common.routes(),common.allowedMethods());
module.exports = Router;