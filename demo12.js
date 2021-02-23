/*
 * @Description:使用静态资源 static
 * @Author: iwillbe12138
 * @Date: 2021-02-23 16:10:58
 * @LastEditTime: 2021-02-23 16:19:22
 * @LastEditors:
 */

const Koa = require("koa");
const path = require("path");
const static = require("koa-static");
const app = new Koa();

const staticPath = "./static";

app.use(static(path.join(__dirname, staticPath)));

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.listen(3000, () => {
  console.log("serve is starting at port 3000");
});
