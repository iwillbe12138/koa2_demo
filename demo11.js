/*
 * @Description:模板
 * @Author: iwillbe12138
 * @Date: 2021-02-23 15:54:16
 * @LastEditTime: 2021-02-23 16:02:52
 * @LastEditors:
 */

const Koa = require("koa");
const Views = require("koa-views");
const path = require("path");
const app = new Koa();

//dirname  node 提供的  项目的路径
app.use(
  Views(path.join(__dirname, "./views"), {
    extension: "ejs", //声明 模板类型
  })
);

app.use(async (ctx) => {
  let title = "Hello World";
  await ctx.render("index", { title });
});

app.listen(3000, () => {
  console.log("serve is starting at port 3000");
});
