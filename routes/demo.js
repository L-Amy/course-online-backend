let router = require('koa-router')();

const DemoApi = require('../controllers/demo')
const routers = router
  .get('/demoData', DemoApi.getDemoData)

module.exports = routers