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
  let createDate = fecha.format(new Date(),'YYYY-MM-DD HH:mm:ss')
  let sql = `insert into student (StudentNo,PassWord,CreateDateTime) values ('${data.account}','${data.passsword}','${createDate}')`
  return mysql.createConnection(DBConfig)
    .then(conn => {
      var result = conn.query(sql)
      conn.end();
      return result
    })
}

async function doResgiterTeacher(data) {
  let createDate = fecha.format(new Date(),'YYYY-MM-DD HH:mm:ss')
  let sql = `insert into teacher (WorkNo,PassWord,createDateTime) values ('${data.account}','${data.password}','${createDate}')`
  return mysql.createConnection(DBConfig)
    .then(conn => {
      var result = conn.query(sql)
      conn.end()
      return result;
    })
}

module.exports = {
  checkStudent,
  checkTeacher,
  doResgiterStudent,
  doResgiterTeacher
}