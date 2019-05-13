let router = require('koa-router')();

const TeacherAPI = require('../controllers/teacher/index')
const routers = router
  .post('/updateMessage', TeacherAPI.updateMessage)//教师完善个人信息
module.exports = routers