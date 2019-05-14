let mysql = require('promise-mysql')
const DBConfig = require('../config/DBConfig')
const fecha = require('fecha')

async function updateMessage(request) {
    let sql = `update student set ColleagueId=${request.ColleagueId},SpecialityId=${request.SpecialityId},GradeId=${request.GradeId},ClassId=${request.ClassId},Name='${request.Name}',Sex='${request.Sex}' where Id=${request.Id}`;
    return mysql.createConnection(DBConfig).then(conn => {
        var result = conn.query(sql);
        conn.end();
        return result;
    })
}

async function selectMessage(request){
    let sql=`select *from student where Id=${request.Id}`;
    return mysql.createConnection(DBConfig).then(conn => {
        var result = conn.query(sql);
        conn.end();
        return result;
    })
}
module.exports = {
    updateMessage,
    selectMessage
}