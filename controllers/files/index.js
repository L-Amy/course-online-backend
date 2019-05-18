let cors = require('koa-cors');
const fileServe = require('../../service/file')
const fs = require('fs')

module.exports = {
  // ctrl 上传学生头像
  async uploadStudentAvatar(ctx) {
    await cors();
    // console.log(ctx.request.body)
    let data = ctx.request.body
    const file = ctx.request.files.file
    const reader = fs.createReadStream(file.path);
    const ext = file.name.split('.').pop();
    const fileName = `${Math.random().toString()}.${ext}`
    const upStream = fs.createWriteStream(`public/images/${fileName}`)
    reader.pipe(upStream);
    data.url = `/public/images/${fileName}`

    await fileServe.updateStudentAvatar(data).then(res => {
      if (res) {
        ctx.body = {
          status: true,
          msg: '上传成功',
          data: {
            url: data.url
          }
        }
      } else {
        ctx.body = {
          status: false,
          msg: '上传失败',
          data: ''
        }
      }
    })
  },
  // 上传教师头像
  async uploadTeacherAvatar(ctx) {
    await cors();
    // console.log(ctx.request.body)
    let data = ctx.request.body
    const file = ctx.request.files.file
    const reader = fs.createReadStream(file.path);
    const ext = file.name.split('.').pop();
    const fileName = `${Math.random().toString()}.${ext}`
    const upStream = fs.createWriteStream(`public/images/${fileName}`)
    reader.pipe(upStream);
    data.url = `/public/images/${fileName}`

    await fileServe.updateTeacherAvatar(data).then(res => {
      if (res) {
        ctx.body = {
          status: true,
          msg: '上传成功',
          data: {
            url: data.url
          }
        }
      } else {
        ctx.body = {
          status: false,
          msg: '上传失败',
          data: ''
        }
      }
    })
  }
}