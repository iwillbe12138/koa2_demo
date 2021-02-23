/*
 * @Description:route 层级
 * @Author: iwillbe12138
 * @Date: 2021-02-23 10:33:01
 * @LastEditTime: 2021-02-23 10:37:45
 * @LastEditors:
 */

const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router({
  prefix: "/will",
});

router
  .get("/", (ctx, next) => {
    ctx.body = "Hello World";
  })
  .get("/todo", (ctx, next) => {
    ctx.body = "todo page";
  });

app.use(router.routes()).use(router.allowedMethods()); //遵循上述的 router.get

app.listen(3000, () => {
  console.log("serve starting at port 3000");
});
