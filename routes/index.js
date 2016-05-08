// 路由总配置
module.exports = function(app) {
  require('./register')(app);
  require('./login')(app);
  require('./home')(app);
  require('./cart')(app);
}
