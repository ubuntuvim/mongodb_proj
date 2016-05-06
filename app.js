//Welcome learning
var express = require('express');
//  引用模块
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var mongoose = require('mongoose');

var app = express();
// app.get('/', function(req, res) {
// 	res.render('register');  //跳转到注册页面的路由
// });

// 设置模板引擎
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);
// 设定视图存放到目录
app.set('views', require('path').join(__dirname, 'views'));
// 设定静态资源目录
app.use(express.static(require('path').join(__dirname, 'public')));

// 调用模块
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

// 连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/test");
app.use(session({
  secret: 'secret',
  cookie: {
    maxAge: 1000*60*30
  }
}));

// 在register的post请求处理中我们使用了express-session模块来保存相关信息，
// 这里我们就使用中间件来传递这些提示信息
app.use(function(req, res, next) {
  res.locals.user = req.session.user;  //保存用户信息
  var err = req.session.error;  //保存错误的结果响应信息
  res.locals.message = '';
  if (err)
    res.locals.message = '<div class="alert alert-danger" style="margin-bottom: 20px; color: red;"' + err + '</div>';

  next();
});

//  引入路由模块
require('./routes')(app);

console.log("服务已启动，执行:http://localhost:8088");
app.listen(8088);
