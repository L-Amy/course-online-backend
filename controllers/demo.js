let cors = require('koa-cors');
let mysql = require('promise-mysql')
const DBConfig = require('../config/DBConfig')

// mysql.createConnection(DBConfig)
//   .then((conn) => {
//     var result = conn.query('select name from student');
//     conn.end();
//     return result;
//   })
//   .then(res => {
//     console.log(res);
//   })

module.exports = {
  async getDemoData(ctx) {
    await cors();

    const data = {
      username: 'Amy',
      password: 'admin'
    }
    ctx.body = data
  }
}