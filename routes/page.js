/**
 * Created by Administrator on 2017/5/26.
 */
/**
 * Created by Administrator on 2017/3/30.
 */
var router = require('koa-router')();



//跳转首页
router.get('/',function (req,res,next) {
	console.log("跳转页面");
	res.render("/IDCardNo");
});
router.get('/test',function (req,res,next) {
	res.render("/IDCardNo");
});
router.get('/admissionDocPage',function (req,res,next) {
	res.render("web/admissionDoc");
});
router.get('/admissionPatPage',function (req,res,next) {
	res.render("web/admissionPat");
});
router.get('/casePage',function (req,res,next) {
	res.render("web/case");
})
router.get('/westernPage',function (req,res,next) {
	res.render("web/western");
})
router.get('/linePage',function (req,res,next) {
	res.render("web/line");
})
router.get('/docListPage',function (req,res,next) {
	res.render("web/docList");
})

module.exports = router;