const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'SUCCESS! EdgeOne Pages Koa is working!';
});

module.exports = app.callback();
