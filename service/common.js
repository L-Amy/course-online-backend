let mysql = require('promise-mysql')
const DBConfig = require('../config/DBConfig')
const fecha = require('fecha')

async function getColleagueList() {
    let sql = `select Id,ColleagueNo,Name from colleague`;
    return mysql.createConnection(DBConfig).then(conn => {
        var result = conn.query(sql);
        conn.end();
        return result;
    })
}

async function getSpecilityList(ColleagueId) {
    let sql = `select Id,SpecialityNo,SpecialityName from specialities where ColleagueId=${ColleagueId}`;
    return mysql.createConnection(DBConfig).then(conn => {
        var result = conn.query(sql);
        conn.end();
        return result;
    })
}

async function getGradeList(SpecialityId) {
    let sql = `select Id,GradeNO,Name from grade where SpecialitiesId=${SpecialityId}`;
    return mysql.createConnection(DBConfig).then(conn => {
        var result = conn.query(sql);
        conn.end();
        return result;
    })
}

async function getClassList(GradeId){
    let sql = `select Id,ClassNo,Name from class where GradeId=${GradeId}`;
    return mysql.createConnection(DBConfig).then(conn => {
        var result = conn.query(sql);
        conn.end();
        return result;
    })
}
module.exports = {
    getColleagueList,
    getSpecilityList,
    getGradeList,
    getClassList,
}