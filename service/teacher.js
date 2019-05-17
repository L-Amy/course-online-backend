let mysql = require('promise-mysql')
const DBConfig = require('../config/DBConfig')
const fecha = require('fecha')

async function updateMessage(request) {
    let sql = `update teacher set ColleagueId=${request.ColleagueId},SpecialityId=${request.SpecialityId},GradeId=${request.GradeId},CourseId=${request.CourseId},Name='${request.Name}',Sex='${request.Sex}' where Id=${request.Id}`;
    return mysql.createConnection(DBConfig).then(conn => {
        var result = conn.query(sql);
        conn.end();
        return result;
    })
}
async function selectMessage(request){
    let sql=`select *from teacher where Id=${request.Id}`;
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