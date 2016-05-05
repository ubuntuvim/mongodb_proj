//Welcome learning
var express = require('express');
//  引用模块
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
 
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

//  引入路由模块
require('./routes')(app);

console.log("服务已启动，执行:http://localhost:8088");
app.listen(8088);
