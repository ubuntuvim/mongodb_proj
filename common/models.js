/**
 * 用来保存各个集合的Schema文件(集合属性)
 */
module.exports = {
	//  user模型
   user: {
   	name: { type: String, required: true },
     	password: { type: String, required: true },
     	gender: { type: Boolean, default: true }
   }
};
