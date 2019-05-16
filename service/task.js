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
        if(request.CourseId>0){
            var sql=`SELECT * FROM task WHERE CourseId=${request.CourseId} AND TaskStatus=${request.TaskStatus}`;
        }
        if(request.StudentId>0){
            var sql=`SELECT * FROM task WHERE StudentId=${request.StudentId} AND TaskStatus=${request.TaskStatus}`;
        }
        if(request.teacherId>0){
            var sql=`SELECT COUNT(*) AS count FROM task WHERE TeacherId=${request.teacherId}`;
        }
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
    },
    async answerTask(request){
        let sql=`update task set StudentId=${request.StudentId},answerContent='${request.AnswerContent}',TaskStatus=1 where Id=${request.Id}`;
        return mysql.createConnection(DBConfig).then(conn=>{
            var result=conn.query(sql);
            conn.end();
            return result;
        })
    },
    async markTask(request){
        let sql=`Update task SET MarkContent='${request.markContent}',TaskStatus=2 WHERE Id=${request.Id}`;
        return mysql.createConnection(DBConfig).then(conn=>{
            var result=conn.query(sql);
            conn.end();
            return result;
        })
    },
    async TaskDetail(id){
        let sql=`SELECT *FROM task where Id=${id}`;
        return mysql.createConnection(DBConfig).then(conn=>{
            var result=conn.query(sql);
            conn.end();
            return result;
        })
    }
}