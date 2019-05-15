let cors = require('koa-cors');
const task = require('../../service/task');

async function publishTask(ctx) {
    await cors();
    const request = ctx.request.body;
    if (request != null) {
        try {
            let result = await task.publishTask(request);
            if (result.insertId > 0) {
                ctx.body = {
                    code: '1001',
                    msg: '发布成功',
                    id: result.insertId,
                }
            }
        } catch{
            ctx.body = {
                code: '1000',
                msg: '发布失败'
            }
        }
    }

}
async function getTaskList(ctx) {
    await cors();
    const request = ctx.request.body;
    if (request != null) {
        let result = await task.getTaskList(request.teacherId);
        ctx.body = result;
    }

}
async function getTask(ctx) {
    await cors();
    const request = ctx.request.body;
    if (request != null) {
        let result = await task.getTask(request);
        ctx.body = result;
    }
}
async function deleteTask(ctx) {
    await cors();
    const request = ctx.request.body;
    if (request != null) {
        try {
            let result = await task.deleteTask(request.Id);
            ctx.body = {
                code: '1001',
                msg: "删除成功",
            }
        } catch{
            ctx.body = {
                code: '1000',
                msg: "删除失败",
            }
        }
    }
}
async function updateTask(ctx){
    await cors();
    const request = ctx.request.body;
    if (request != null) {
        try {
            let result = await task.updateTask(request);
            ctx.body = {
                code: '1001',
                msg: "更新成功",
            }
        } catch{
            ctx.body = {
                code: '1000',
                msg: "更新失败",
            }
        }
    }
}
module.exports = {
    publishTask,
    getTaskList,
    getTask,
    deleteTask,
    updateTask
}