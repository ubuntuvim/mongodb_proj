var express = require('express');
var app = express();
var path = require('path');
var mongoose = require("mongoose");

var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');

global.dbHelper = require( './common/dbHelper' );
global.log = require( './common/logUtils' );

global.db = mongoose.connect("mongodb://127.0.0.1:27017/test");

app.use(session({
    secret:'secret',
    cookie:{
        maxAge:1000*60*30
    }
}));

// 设定views变量，意为视图存放的目录
app.set('views', path.join(__dirname, 'views'));

// 设定view engine变量，意为网页模板引擎
//app.set('view engine', 'ejs');
app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

// 设定静态文件目录，比如本地文件
app.use(express.static(path.join(__dirname, 'public')));

// 在register的post请求处理中我们使用了express-session模块来保存相关信息，
// 这里我们就使用中间件来传递这些提示信息
app.use(function(req, res, next) {
  res.locals.user = req.session.user;  //保存用户信息
  var err = req.session.error;  //保存错误的结果响应信息
  res.locals.message = '';
  log.debug("err = " + err)
  if (err)
    res.locals.message = '<div class="alert alert-danger" style="margin-bottom: 20px; color: red;">' + err + '</div>';

  var tmp = req;
  // 打印参数日志
  log.debug("请求参数： " + log._toString(tmp.body));

  next();
});

//  引入路由模块
require('./routes')(app);

console.log("服务已启动，执行:http://localhost:8088");
app.listen(8088);
