let Koa = require('koa')
const serve = require('koa-static')
const bodyparser = require('koa-bodyparser')
const koaBody = require('koa-body')
const path = require('path')
let routers = require('./routes/index')

const app = new Koa()
const PORT = '3000'
// app.convert = x => app.use.call(app, convert(x))
// app.convert(bodyparser());
app.use(serve(path.join(__dirname)))
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 1000 * 1024 * 1024
  }
}))
app.use(bodyparser())

app.use(routers.routes()).use(routers.allowedMethods())
console.log(`Koa server is starting at http://localhost:${PORT}`)
app.listen(PORT)