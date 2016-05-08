// 首页、新增商品
module.exports = function(app) {  //app是express对象
  app.get('/home', function(req, res) {
    // res.render('home');
    if (req.session.user) {  //判断用户登录状态
      var Commodity = global.dbHelper.getModel('commodity');
      Commodity.find({}, function(error, docs) {
        // 传递数据
        res.render('home', { Commoditys: docs });
      });
    } else {  //未登录
      req.session.error = "请先登录！";
      res.redirect('/login');
    }
  });
  // 新增商品
  app.get('/addcommodity', function(req, res) {
    res.render('addcommodity');
  });
  app.post('/addcommodity', function(req, res) {
    var c = global.dbHelper.getModel('commodity');
    c.create({
      name: req.body.name,
      price: req.body.price,
      imgSrc: req.body.imgSrc
    }, function(error, doc) {
      if (doc) {
        res.send(200);
      } else {
        res.send(404);
      }
    });
  });
};
