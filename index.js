let Koa = require('koa')
// const convert = require('koa-convert')
const bodyparser = require('koa-bodyparser')
let routers = require('./routes/index')

const app = new Koa()
const PORT = '3000'
// app.convert = x => app.use.call(app, convert(x))
// app.convert(bodyparser());
app.use(bodyparser())
app.use(routers.routes()).use(routers.allowedMethods())
console.log(`Koa server is starting at http://localhost:${PORT}`)
app.listen(PORT)