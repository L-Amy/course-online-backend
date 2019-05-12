let mysql = require('promise-mysql')
const DBConfig = require('../config/DBConfig')

async function checkStudent(account, password) {
  // console.log(account, password)
  let sql = `select StudentNo from student where StudentNo=${account} and Password=${password}`
  return mysql.createConnection(DBConfig)
    .then((conn) => {
      var result = conn.query(sql)
      conn.end();
      return result;
    })
}

module.exports = {
  checkStudent
}