let router = require('koa-router')();

const TaskAPI = require('../controllers/task/index')
const routers = router
  .post('/publishTask', TaskAPI.publishTask)//教师发布任务
  .post('/getTaskList',TaskAPI.getTaskList)//得到任务列表根据教师id
module.exports = routers