let mysql = require('promise-mysql')
const DBConfig = require('../config/DBConfig')
const fecha = require('fecha')

async function updateMessage(request) {
    let sql = `update teacher set ColleagueId=${request.ColleagueId},ClassId=${request.ClassId},Name=${request.Name},Sex=${request.Sex} where Id=${request.Id}`;
    return mysql.createConnection(DBConfig).then(conn => {
        var result = conn.query(sql);
        conn.end();
        return result;
    })
}

module.exports = {
    updateMessage
}