const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();//require('koa-router') 返回的是函数 带()是调用这个函数 如果不带()就必须需要 new
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert'); //等同于 import convert from 'koa-convert'
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
const users = require('./routes/users');


// middlewares 中间件
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(convert(require('koa-static')(__dirname + '/public')));

// app.use(views(__dirname + '/views', {
//   extension: 'jade'
// }));

// 想用jade就屏蔽ejs即可
app.use(views(__dirname + '/views-ejs', {
  extension: 'ejs'
}));


// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 路由设置
router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());


app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  console.log(err)
  log.error('server error', err, ctx);
});


module.exports = app;