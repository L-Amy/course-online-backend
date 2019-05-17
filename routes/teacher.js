let router = require('koa-router')();

const TeacherAPI = require('../controllers/teacher/index')
const routers = router
  .post('/updateMessage', TeacherAPI.updateMessage)//教师完善个人信息
  .post('/selectMessage',TeacherAPI.selectMessage)//查询教师个人信息
module.exports = routers