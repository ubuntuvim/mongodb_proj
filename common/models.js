/**
 * 用来保存各个集合的Schema文件(集合属性)
 */
module.exports = {
	//  user模型
   user: {
   	name: { type: String, required: true },
     	password: { type: String, required: true },
     	gender: { type: Boolean, default: true }
   },
   //  商品
  //  name(商品名称)、price(商品价格)、imgSrc(商品展示图片路径)
   commodity: {
     name: { type: String },
     price: { type: Number },
     imgSrc: { type: String }
   },
   // 购物车
  //  uId(用户ID)、cId(商品ID)、cName(商品名称)、cPrice(商品价格)、
  // cImgSrc(商品展示图片路径)、cQuantity(商品数量)、cStatus(商品结算状态，未结算为false,已结算为true)
   cart: {
     uId: { type: String },
     cId: { type: String },
     cName: { type: String },
     cPrice: { type: String },
     cImgSrc: { type: String },
     cQuantity: { type: String },
     cStatus: { type: Boolean, default: false }
   }
};
