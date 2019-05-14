let router = require('koa-router')();
const CommonAPI = require('../controllers/common/index')
const routers = router
  .post('/getColleagueList', CommonAPI.getColleagueList)//得到学院列表
  .post('/getSpecilityList',CommonAPI.getSpecilityList)//根据学院id得到专业列表
  .post('/getGradeList',CommonAPI.getGradeList)//根据专业id得到年级列表
  .post('/getClassList',CommonAPI.getClassList)//根据年级id得到班级列表
  .post('/getCourseList',CommonAPI.getCourseList)//根据年级id得到课程列表
module.exports = routers