let router = require('koa-router')();

const fileCtrl = require('../controllers/files/index')
const routers = router
  .post('/student/avatar', fileCtrl.uploadStudentAvatar)
  .post('/teacher/avatar', fileCtrl.uploadTeacherAvatar)

module.exports = routers