let mysql = require('promise-mysql')
const DBConfig = require('../config/DBConfig')
const fecha = require('fecha')

module.exports = {
    async  publishTask(request) {
        let createDate = fecha.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
        let sql = `INSERT INTO task (ClassId,TeacherId,CourseId,Content,CreateBy,CreateDateTime,TaskStatus,TaskStatusString)VALUES(${request.ClassId},${request.Id},${request.CourseId},'${request.Content}','${request.Name}','${createDate}',0,'未完成')`;
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
    },
    //得到任务列表关于学生的
    async getTask(request){
        let sql=`SELECT * FROM task WHERE CourseId=${request.CourseId} AND TaskStatus=${request.TaskStatus}`;
        return mysql.createConnection(DBConfig).then(conn=>{
            var result=conn.query(sql);
            conn.end();
            return result;
        })
    },
    async deleteTask(Id){
        let sql=`DELETE FROM task WHERE Id=${Id}`;
        return mysql.createConnection(DBConfig).then(conn=>{
            var result=conn.query(sql);
            conn.end();
            return result;
        })
    },
    async updateTask(request){
        let sql=`update task set Content='${request.Content}' where Id=${request.TaskId}`;
        return mysql.createConnection(DBConfig).then(conn=>{
            var result=conn.query(sql);
            conn.end();
            return result;
        })
    }
}