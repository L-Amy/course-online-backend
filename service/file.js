let mysql = require('promise-mysql')
const DBConfig = require('../config/DBConfig')

async function updateStudentAvatar(data) {
  let sql = `update student SET ImgLocation='${data.url}' WHERE Id='${data.userId}'`;
  return mysql.createConnection(DBConfig).then(conn => {
    var result = conn.query(sql);
    conn.end();
    return result;
  })
}

async function updateTeacherAvatar(data) {
  let sql = `update teacher SET ImgLocation='${data.url}' WHERE Id='${data.userId}'`;
  return mysql.createConnection(DBConfig).then(conn => {
    var result = conn.query(sql);
    conn.end();
    return result;
  })
}
module.exports = {
  updateStudentAvatar,
  updateTeacherAvatar
}