/*
 * @Description:中间件 koa-bodyParser
 * @Author: iwillbe12138
 * @Date: 2021-02-22 15:26:34
 * @LastEditTime: 2021-02-22 17:06:00
 * @LastEditors:
 */

const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  if (ctx.url === "/" && ctx.method === "GET") {
    //显示表单页面
    let html = `
        <h1>will Koa2 Request POST</h1>
        <form method='POST' action='/'>
          <p>username</p>
          <input name='username' />
          <br/>
          <p>age</p>
          <input name='age' />
          <br/>
          <p>webSite</p>
          <input name='webSite' />
          <br/>
          <button type='submit'>submit</button>
        </form>
    `;
    ctx.body = html;
  } else if (ctx.url === "/" && ctx.method === "POST") {
    let postData = await parsePostData(ctx);
    ctx.body = postData;
  } else {
    ctx.body = "<h1>404</h1>";
  }
});

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = "";
      ctx.req.addListener("data", (data) => {
        postData += data;
      });
      ctx.req.on("end", () => {
        resolve(parseQueryStr(postData));
      });
    } catch (error) {
      reject(error);
    }
  });
}

function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split("&");
  for (let item of queryStrList) {
    let data = item.split("=");
    queryData[data[0]] = decodeURIComponent(data[1]);
  }
  return queryData;
}

app.listen(3000, () => {
  console.log("serve is starting at port 3000");
});
