var router = require('koa-router')();
/**
 * var router = require('koa-router')();
 * 等同于
 * var router = require('koa-router');
 * router = new router();
 */

// async函数 await只能在async函数里面用
// router.get('/', async function (ctx, next) {
//   ctx.state = {
//     title: 'koa2 title'
//   };
//
//   await ctx.render('index', {
//   });
// });

router.get('/',async (ctx, next)=>{
	ctx.body = 'What are you taking about'
	console.log('[demo] start-quick is starting at port 8000')
    ctx.state = {
    title : 'What are you taking about '
  };
  
    await ctx.render('index',{
  })
})
module.exports = router;
