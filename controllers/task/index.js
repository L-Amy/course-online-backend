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
async function updateTask(ctx) {
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
async function answerTask(ctx) {
    await cors();
    const request = ctx.request.body;
    if (request != null) {
        try {
            let result = await task.answerTask(request);
            ctx.body = {
                code: '1001',
                msg: "回答成功",
            }
        } catch{
            ctx.body = {
                code: '1000',
                msg: "回答失败",
            }
        }
    }
}
async function markTask(ctx) {
    await cors();
    const request = ctx.request.body;
    if (request != null) {
        try {
            let result = await task.markTask(request);
            ctx.body = {
                code: '1001',
                msg: "批阅成功",
            }
        } catch{
            ctx.body = {
                code: '1000',
                msg: "批阅失败",
            }
        }
    }
}
async function TaskDetail(ctx) {
    await cors();
    const request = ctx.request.body;
    if (request != null) {
        let result = await task.TaskDetail(request.Id);
        ctx.body = result;
    }
}
async function askTask(ctx) {
    await cors();
    try {
        const request = ctx.request.body;
        if (request != null) {
            let result = await task.askTask(request);
            ctx.body = result;
        }

    } catch{
        return ctx.body = {
            code: '1000',
            msg: "提问失败"
        }
    }
}
async function getAskList(ctx) {
    await cors();
    const request = ctx.request.body;
    let result = await task.getAskList(request);
    ctx.body = result;
}
async function getAskDetail(ctx){
    await cors();
    const request = ctx.request.body;
    let result = await task.getAskDetail(request.Id);
    ctx.body = result;
}
async function answerAsk(ctx){
    await cors();
    try{
        const request = ctx.request.body;
        let result = await task.answerAsk(request);
        ctx.body={
            code:'1001',
            msg:"答疑成功"
        }
    }catch{
        ctx.body={
            code:'1000',
            mag:"答疑失败"
        }
    }
}
module.exports = {
    publishTask,
    getTaskList,
    getTask,
    deleteTask,
    updateTask,
    answerTask,
    markTask,
    TaskDetail,
    askTask,
    getAskList,
    getAskDetail,
    answerAsk

}