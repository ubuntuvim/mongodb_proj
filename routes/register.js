
// 注册路由
module.exports = function(app) {  //app是express对象
  app.get('/register', function(req, res) {
    res.render('register');
  });
  // POST 请求，保存注册信息
  app.post('/register', function(req, res) {
    var User = global.dbHelper.getModel('user'),
        uname = req.body.uname;
    User.findOne({name: uname}, function(error, doc) {
      if (doc) {
        req.session.error = "用户名已经存在！";
        res.send(500);
      } else {
        User.create({
          name: uname,
          password: req.body.upwd
        }, function(error, doc) {  // fail function
          if (error) {
            res.send(500);
          } else {
            req.session.error = "用户注册成功！";
            res.send(200);
          }
        });
      }
    });
  });
}
