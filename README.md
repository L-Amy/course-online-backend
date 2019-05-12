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

- [ ] 注册、登录
- [ ] 任务：
  - [ ] 发布
  - [ ] 查看进度
  - [ ] 修改
  - [ ] 删除

#### API 文档
+ **注册** `/create/account`
  **Method**: POST
  **参数：**
  + type： 1（教师）、2（学生）
  + accont： 学生学号/教师工号
  + password：密码