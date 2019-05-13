let mysql = require('promise-mysql')
const DBConfig = require('../config/DBConfig')
const fecha = require('fecha')

async function checkStudent(account) {
  // console.log(account, password)
  // let sql = `select StudentNo from student where StudentNo=${account} and Password=${password}`
  let sql = `select * from student where StudentNo=${account}`
  return mysql.createConnection(DBConfig)
    .then((conn) => {
      var result = conn.query(sql)
      conn.end();
      return result;
    })
}
async function checkTeacher(account) {
  // console.log(account, password)
  // let sql = `select StudentNo from student where StudentNo=${account} and Password=${password}`
  let sql = `select * from teacher where WorkNo=${account}`
  return mysql.createConnection(DBConfig)
    .then((conn) => {
      var result = conn.query(sql)
      conn.end();
      return result;
    })
}

async function doResgiterStudent(data) {
  let createDate = fecha.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
  let sql = `insert into student (StudentNo,Password,isLogin,CreateDateTime) values ('${data.account}','${data.password}',0,${createDate}')`
  return mysql.createConnection(DBConfig)
    .then(conn => {
      var result = conn.query(sql)
      conn.end();
      return result
    })
}

async function doResgiterTeacher(data) {
  let createDate = fecha.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
  let sql = `insert into teacher (WorkNo,Password,isLogin,createDateTime) values ('${data.account}','${data.password}',0,'${createDate}')`
  return mysql.createConnection(DBConfig)
    .then(conn => {
      var result = conn.query(sql)
      conn.end()
      return result;
    })
}

async function studentLogin(data) {
  let hasStudent = await checkStudent(data.account)
  if (hasStudent.length) {
    const student = hasStudent[0];
    if (student.Password == data.password) {
      return mysql.createConnection(DBConfig)
        .then(conn => {
          let result = conn.query(`update student SET isLogin=1 WHERE StudentNo=${data.account} and Password=${data.password}`)
          conn.end();
          student['isLogin'] = 1;
          return student;
        })
    } else {
      return {
        status: true,
        msg: '密码错误',
        data: '1001' // 账号密码错误
      }
    }
  } else {
    return {
      status: true,
      msg: '该账号不存在',
      data: '1000' //账号不存在
    }
  }
}

// teacher login ctrl
async function teacherLogin(data) {
  let hasTeacher = await checkTeacher(data.account)
  if (hasTeacher.length) {
    const teacher = hasTeacher[0];
    if (teacher.Password == data.password) {
      return mysql.createConnection(DBConfig)
        .then(conn => {
          let result = conn.query(`update teacher SET isLogin=1 WHERE WorkNo=${data.account} and Password=${data.password}`)
          conn.end();
          teacher['isLogin'] = 1;
          return teacher;
        })
    } else {
      return {
        status: true,
        msg: '密码错误',
        data: '1001' // 账号密码错误
      }
    }
  } else {
    return {
      status: true,
      msg: '该教师账号不存在',
      data: '1000' // 账号不存在
    }
  }
}

async function studentLogout(account) {
  let hasStudent = await checkStudent(account)
  if (hasStudent.length) {
    return mysql.createConnection(DBConfig)
      .then(conn => {
        let result = conn.query(`update student SET isLogin=0 WHERE StudentNo=${account}`)
        conn.end()
        return {
          statu: true,
          msg: '已退出登录'
        }
      })
  } else {
    return {
      status: true,
      msg: '不存在该用户',
      data: '1000'
    }
  }
}

async function teacherLogout(account) {
  let hasTeacher = await checkTeacher(account)
  if (hasTeacher.length) {
    return mysql.createConnection(DBConfig)
      .then(conn => {
        let result = conn.query(`update teacher SET isLogin=0 WHERE WorkNo=${account}`)
        conn.end()
        return {
          statu: true,
          msg: '已退出登录'
        }
      })
  } else {
    return {
      status: true,
      msg: '不存在该用户',
      data: '1000' //code
    }
  }
}

module.exports = {
  checkStudent,
  checkTeacher,
  doResgiterStudent,
  doResgiterTeacher,
  studentLogin,
  teacherLogin,
  studentLogout,
  teacherLogout
}