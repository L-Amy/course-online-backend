let cors = require('koa-cors');
const student = require('../../service/student');
const task=require('../../service/task')
module.exports={
    async updateMessage(ctx){
        await cors();
        const data = ctx.request.body;
        if(data != null){
            let result = await student.updateMessage(data);
            if(result.affectedRows>0){
                result={
                    code:1001,
                    msg:"更新成功",
                }
            }else{
                result={
                    code:1000,
                    msg:"更新失败",
                }
            }
            ctx.body = result
        }
    },
    async selectMessage(ctx){
        await cors();
        const data = ctx.request.body;
        if(data != null){
            let result = await student.selectMessage(data);
            if(result==null){
                result=[];
            }
            ctx.body = result
        }
    },
    async getStudentList(ctx){
        await cors();
        const data = ctx.request.body;
        if(data != null){
            let result = await student.getStudentList(data.classId,data.teacherId);
            if(result.length>0){
                let res=await task.getTask({teacherId:data.teacherId});
                result.forEach((item,index) => {
                    item['uncomCount']=res[0].count- item.comCount;
                });
            }
            ctx.body = result
        }
    }
}