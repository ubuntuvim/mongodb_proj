/**
 * 操作models.js类中到各个模型
 */
var mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   models = require('./models');  //引入模型类

for (var m in models) {
	mongoose.model(m, new Schema(models[m]));
}

module.exports = {
 	//  暴露到外部到接口
  // 通过getModel可获取集合的Model模型就可以对数据库有实质性的操作了
	getModel: function(type) {
   	return _getModel(type);
   }
};
// private method
var _getModel = function(type) {
	return mongoose.model(type);
}


// 定义一个全局到变量dbHelper
global.dbHelper = require('./common/dbHelper');
