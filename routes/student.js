let router = require('koa-router')();

const StudentAPI = require('../controllers/student/index')
const routers = router
  .post('/updateMessage', StudentAPI.updateMessage)//学生完善个人信息
  .post('/selectMessage',StudentAPI.selectMessage)//查询学生个人信息
module.exports = routers