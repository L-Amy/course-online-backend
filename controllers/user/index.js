let cors = require('koa-cors');
const user = require('../../service/user')

module.exports = {
  async register(ctx) {
    await cors();
    const data = ctx.request.body;
    if (data.type === "1") {
      // 教师
      // try {

      // } catch (error) {
      //   ctx.body = {
      //     status: false,
      //     msg: '数据格式错误'
      //   }
      // }
      let result = await user.checkTeacher(data.account)
      if (result.length) {
        ctx.body = {
          status: true,
          msg: '该工号已注册',
          data: []
        }
      } else {
        try {
          let teaRegisterRes = await user.doResgiterTeacher(data)
          ctx.body = {
            status: true,
            msg: '教师注册成功',
            data: teaRegisterRes
          }
        } catch (error) {
          console.log(error)
          ctx.body = {
            status: false,
            msg: '教师注册失败',
            data: []
          }
        }
      }
    } else if (data.type === '2') {
      // 学生
      try {
        let result = await user.checkStudent(data.account)
        if (result.length) {
          ctx.body = {
            status: true,
            msg: '该学号已被注册',
            data: []
          }
        } else {
          try {
            let stuRegisterRes = await user.doResgiterStudent(data);
            ctx.body = {
              status: true,
              msg: '学生注册成功',
              data: stuRegisterRes
            }
          } catch (error) {
            console.log('学生注册失败： ', error)
            ctx.body = {
              status: false,
              msg: '学生注册失败',
              data: []
            }
          }
        }
      } catch (error) {
        ctx.body = {
          status: false,
          msg: '数据格式错误'
        }
      }
    }

  }
}