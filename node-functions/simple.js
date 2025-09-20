// 最简单的测试版本
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  ctx.type = 'application/json';
  ctx.body = {
    success: true,
    message: "Hello from EdgeOne Pages!",
    timestamp: new Date().toISOString(),
    path: ctx.path,
    method: ctx.method
  };
});

module.exports = app;
