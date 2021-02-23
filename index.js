/*
 * @Description: index
 * @Author: iwillbe12138
 * @Date: 2021-02-20 14:20:06
 * @LastEditTime: 2021-02-20 14:23:45
 * @LastEditors:  
 */

 const Koa =require('koa')
 const app=new Koa();
 app.use(async (ctx)=>{
   ctx.body='hello world'
 })
 app.listen(9000)
 console.log('app starting at port 9000')