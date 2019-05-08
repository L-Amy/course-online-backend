let Koa = require('koa')
const bodyparser = require('koa-bodyparser')
let routers = require('./routes/index')

const app = new Koa()
const PORT = '3000'
app.use(routers.routes()).use(routers.allowedMethods())
console.log(`Koa server is starting at http://localhost:${PORT}`)
app.listen(PORT)