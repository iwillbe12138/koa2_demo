/*
 * @Description:cookie
 * @Author: iwillbe12138
 * @Date: 2021-02-23 11:16:09
 * @LastEditTime: 2021-02-23 15:42:14
 * @LastEditors:
 */

const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  if (ctx.url === "/index") {
    ctx.cookies.set("will", "will", {
      domain: "127.0.0.1",
      // path: "/index",//只在这个路径下cookie生效
      maxAge: 1000 * 60 * 60 * 24, //有效时间
      expires: new Date("2021-02-28"), //失效时间
      httpOnly: false, //true为只有http生效
      overwrite: false, //允不允许重写
    });
    ctx.body = "will is ok";
  } else {
    if (ctx.cookies.get("will")) {
      ctx.body = ctx.cookies.get("will");
    } else ctx.body = "cookies is none";
  }
});

app.listen(3000, () => {
  console.log("serve is starting at port 3000");
});
