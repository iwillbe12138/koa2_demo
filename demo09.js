/*
 * @Description:route
 * @Author: iwillbe12138
 * @Date: 2021-02-23 11:05:47
 * @LastEditTime: 2021-02-23 11:12:31
 * @LastEditors:
 */

const Koa = require("koa");
const app = new Koa();

const Router = require("koa-router");
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = ctx.query;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("serve string at port 3000");
});
