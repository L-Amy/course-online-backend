let router = require('koa-router')();

const UserAPI = require('../controllers/user/index')
const routers = router
  .post('/account', UserAPI.register)


module.exports = routers