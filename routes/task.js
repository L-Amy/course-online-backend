let router = require('koa-router')();

const TaskAPI = require('../controllers/task/index')
const routers = router
  .post('/publishTask', TaskAPI.publishTask)//教师发布任务
  .post('/getTaskList',TaskAPI.getTaskList)//得到任务列表根据教师id
  .post('/getTask',TaskAPI.getTask)//得到关于学生的任务列表
  .post('/deleteTask',TaskAPI.deleteTask)
  .post('/updateTask',TaskAPI.updateTask)
  .post('/answerTask',TaskAPI.answerTask)
  .post('/markTask',TaskAPI.markTask)
  .post('/TaskDetail',TaskAPI.TaskDetail)
  .post('/askTask',TaskAPI.askTask)
  .post('/getAskList',TaskAPI.getAskList)
  .post('/getAskDetail',TaskAPI.getAskDetail)
  .post('/answerAsk',TaskAPI.answerAsk)
module.exports = routers