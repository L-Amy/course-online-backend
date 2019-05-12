# course online backend

#### 安装依赖

```bash
npm install
or
yarn
```

#### 运行

```bash
yarn add global supervisor
or
npm install -g supervisor
----
supervisor ./index.js
```

#### TODO

- [x] 注册、登录、登出
- [ ] 任务：
  - [ ] 发布
  - [ ] 查看进度
  - [ ] 修改
  - [ ] 删除

#### API 文档
+ **注册** 
  + url: `/auth/register` 
  + Method: POST
  + 参数：
    + type： 1（教师）、2（学生）
    + account： 学生学号/教师工号
    + password：密码
+ **登录** 
  + url: `/auth/login`
  + Method: POST
  + 参数：
    + type： 1（教师）、2（学生）
    + account： 学生学号/教师工号
    + password：密码
  + 返回值
    + data: 1000  不存在该用户
    + data: 1001 密码错误
+ **登出** 
  + url: `/auth/logout`
  + Method: POST
  + 参数：
    + type： 1（教师）、2（学生）
    + account： 学生学号/教师工号
  + 返回值
    + data: 1000  不存在该用户