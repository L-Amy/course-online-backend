let cors = require('koa-cors');
const teacher = require('../../service/teacher')
module.exports={
    async updateMessage(ctx){
        await cors();
        const data = ctx.request.body;
        if(data != null){
            let result = await teacher.updateMessage(data);
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
            let result = await teacher.selectMessage(data);
            if(result==null){
                result=[];
            }
            ctx.body = result
        }
    }
}