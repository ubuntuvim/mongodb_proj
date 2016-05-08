// 登录
module.exports = function(app) {  //app是express对象
  app.get('/login', function(req, res) {
    res.render('login');
  });
  // 登录
  app.post('/login', function(req, res) {
    var User = global.dbHelper.getModel('user'),
      uname = req.body.uname,
      pwd = req.body.upwd;
    User.findOne({name: uname}, function(error, doc) {
      log.info("doc = " + doc);
      if (!doc) {  //查无数据
        req.session.error = "用户不存在！";
        res.send(404);
      } else if (doc.password !== pwd) {  //密码不一致
        req.session.error = "密码有误！";
        req.send(401);
      } else {  //密码一致
        log.debug("登录成功");
        req.session.user = doc;
        res.send(200);
      }
    });
  });
};
