export function getProductDetail(iid) {
  return axios({
    url: "/detail",
    params: { iid }
  }).catch(err => err);
}

export function getRecommend() {
  return axios({
    url: "/recommend"
  }).catch(err => err);
}

// 利用ES6的类方法,把从后端获取的商品需要展示在页面上详情数据 封装成一个商品对象
// 方便在后面的使用中调取，后端服务器传输过来的数据太乱不方便调取的时候，就需要自己提取封装整合为一个对象
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}

// 封装店铺数据
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

// 封装参数信息数据
export class GoodsParams {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
