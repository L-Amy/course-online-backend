let router = require('koa-router')();

const UserAPI = require('../controllers/user/index')
const routers = router
  .post('/register', UserAPI.register)
  .post('/login',UserAPI.login)


module.exports = routers