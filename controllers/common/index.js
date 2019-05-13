let cors = require('koa-cors');
const common = require('../../service/common')
module.exports = {
    async getColleagueList(ctx) {
        await cors();
        let result = await common.getColleagueList();
        ctx.body = result;
    },
    async getSpecilityList(ctx) {
        await cors();
        let request = ctx.request.body;
        let result = await common.getSpecilityList(request.ColleagueId);
        ctx.body = result;
    },
    async getGradeList(ctx) {
        await cors();
        let request = ctx.request.body;
        let result = await common.getGradeList(request.SpecialityId);
        ctx.body = result;
    },
    async getClassList(ctx){
        await cors();
        let request=ctx.request.body;
        let result = await common.getClassList(request.GradeId);
        ctx.body = result;
    },
}