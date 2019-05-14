let mysql = require('promise-mysql')
const DBConfig = require('../config/DBConfig')
const fecha = require('fecha')

module.exports = {
    async  publishTask(request) {
        let createDate = fecha.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
        let sql = `INSERT INTO task (ClassId,TeacherId,CourseId,Content,CreateBy,CreateDateTime)VALUES(${request.ClassId},${request.Id},${request.CourseId},'${request.Content}','${request.Name}','${createDate}')`;
        return mysql.createConnection(DBConfig).then(conn => {
            var result = conn.query(sql);
            conn.end();
            return result;
        })
    },

    //得到某个教师的任务列表
    async getTaskList(teacherId){
        let sql=`select Id,ClassId,CourseId,Content,CreateDateTime from task where TeacherId=${teacherId} ORDER BY CreateDateTime desc`;
        return mysql.createConnection(DBConfig).then(conn => {
            var result = conn.query(sql);
            conn.end();
            return result;
        })
    }
}