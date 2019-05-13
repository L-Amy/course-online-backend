let cors = require('koa-cors');
const user = require('../../service/user')

module.exports = {
  async register(ctx) {
    await cors();
    const data = ctx.request.body;

    if (data.type === "1") {
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
    }
  },
  async login(ctx) {
    await cors();
    const data = ctx.request.body;
    if (data.type === '1') {
      // 教师登录
      let result = await user.teacherLogin(data)
      if (result.data === '1001') {
        ctx.body = result
      } else if (result.data === '1000') {
        ctx.body = result
      } else {
        ctx.body = {
          status: true,
          msg: '教师登录成功',
          data: result
        }
      }
    } else if (data.type === '2') {
      // 学生登录
      let result = await user.studentLogin(data)
      if (result.data === '1001') {
        ctx.body = result
      } else if (result.data === '1000') {
        ctx.body = result
      } else {
        ctx.body = {
          status: true,
          msg: '学生登录成功',
          data: result
        }
      }
    }
  },
  async logout(ctx) {
    await cors()
    const data = ctx.request.body
    if(data.type === '1'){
      let result = await user.teacherLogout(data.account)
      ctx.body = result
    }else if(data.type === '2'){
      let result = await user.studentLogout(account)
      ctx.body = result
    }
  }
}