let Router = require('koa-router')();

const demo = require('./demo');
const user = require('./user');
const teacher=require('./teacher');
const common=require('./common');
const student=require('./student');
const task=require('./task');
Router.use('/get',demo.routes(),demo.allowedMethods());
Router.use('/auth',user.routes(),user.allowedMethods());
Router.use('/teacher',teacher.routes(),user.allowedMethods());
Router.use('/common',common.routes(),common.allowedMethods());
Router.use('/student',student.routes(),student.allowedMethods());
Router.use('/task',task.routes(),task.allowedMethods());
module.exports = Router;