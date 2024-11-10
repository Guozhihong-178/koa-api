const Koa = require("koa2");
const Router = require("koa-router");
// import Koa from 'koa2'
const app = new Koa();
const router = new Router();
const port = 9000;

app.use(async (ctx) => {
    ctx.body = "Hello, Koa";
  	// ctx.body是ctx.response.body的简写
})

app.listen(port, () => {
    console.log('Server is running at http://localhost:'+port);
})