let cors = require('koa-cors');
const user = require('../../service/user')

module.exports = {
  async register(ctx) {
    await cors();
    // const data = ctx.req

    let result = await user.checkStudent('100000000001','1231')
    console.log(result)
    ctx.body = result
  }
}