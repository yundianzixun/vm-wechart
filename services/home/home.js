/**头部导航栏-主/副标题*/
const maillTitle = {
    name: '品牌特卖 100%正品',
    nameSub: '品牌授权 88元免邮 退换无忧'
};
const bannerList = [{
    'id': 2,
    'linkUrl': 'index/index',
    'imgUrl': 'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/07/10/134/ias_733a59ae93a0686388b92dab6223d652_1135x545_85.jpg'
}, {
    'id': 3,
    'linkUrl': 'index/index',
    'imgUrl': 'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/07/10/43/ias_95542c8731b4f3c4b5d2ceba956a3c5c_1135x545_85.jpg'
}, {
    'id': 4,
    'linkUrl': 'index/index',
    'imgUrl': 'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/07/10/64/ias_b098c1ac411526fb8b8f043906b2817b_1135x545_85.jpg'
}, {
    'id': 5,
    'linkUrl': 'index/index',
    'imgUrl': 'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/07/10/196/ias_dbd2e87d735d7944e77ca9ad22473338_1135x545_85.jpg'
}, {
    'id': 6,
    'linkUrl': 'index/index',
    'imgUrl': 'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/07/10/82/ias_7438322266ff97a72d8be1e5fdd984eb_1135x545_85.jpg'
}];

const dynamicList = [{
    "avatarUrl": "https://p9-passport.byteacctimg.com/img/mosaic-legacy/3793/3131589739~300x300.image",
    "dateAdd": "2023-07-12 17:06:48",
    "goodsId": 6746,
    "goodsName": "hellokitty童装 女童棉袜中大童袜子",
    "nick": "Qiao",
    "number": 1,
    "orderId": 2102401,
    "uid": 8693386
}, {
    "avatarUrl": "https://p9-passport.byteacctimg.com/img/mosaic-legacy/3793/3131589739~300x300.image",
    "dateAdd": "2023-07-12 17:06:17",
    "goodsId": 6745,
    "goodsName": "幼儿园园服韩版男女童装春秋季班服英伦学院风",
    "nick": "Jick",
    "number": 1,
    "orderId": 2102399,
    "uid": 8693386
}, {
    "avatarUrl": "https://p9-passport.byteacctimg.com/img/mosaic-legacy/3793/3131589739~300x300.image",
    "dateAdd": "2023-07-12 17:06:17",
    "goodsId": 4470,
    "goodsName": "毛衣",
    "nick": "Sunny",
    "number": 1,
    "orderId": 2102399,
    "uid": 8693386
}, {
    "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/b1WKhIzJttjfEYJXtNibgoaF51a4IB8b7J8khIfwmSPvuM2Fic70K8toY1cn5KAusicerF6KB7c57n5EqBa17KAPQ/0",
    "dateAdd": "2023-07-12 05:42:51",
    "goodsId": 4407,
    "goodsName": "加绒毛衣",
    "nick": "Daniel",
    "number": 1,
    "orderId": 2100794,
    "uid": 312170
}, {
    "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/b1WKhIzJttjfEYJXtNibgoaF51a4IB8b7J8khIfwmSPvuM2Fic70K8toY1cn5KAusicerF6KB7c57n5EqBa17KAPQ/0",
    "dateAdd": "2023-07-12 05:42:51",
    "goodsId": 6745,
    "goodsName": "幼儿园白色衬衫小学生校服",
    "nick": "Daniel",
    "number": 1,
    "orderId": 2100794,
    "uid": 312170
}];
const categorieList = [{
    'id': 1,
    "name": "T恤",
    "icon": "https://a.vpimg3.com/upload/goadmin/2022/05/31/154/165396603458510188_120x120_85.jpg"
}, {
    'id': 2,
    "name": "连衣裙",
    "icon": "https://a.vpimg3.com/upload/goadmin/2022/05/31/27/165396601947210147_120x120_85.jpg"
}, {
    'id': 3,
    "name": "半截裙",
    "icon": "https://a.vpimg3.com/upload/goadmin/2022/05/31/36/165396613625210052_120x120_85.jpg"
}, {
    'id': 4,
    "name": "休闲鞋",
    "icon": "https://a.vpimg3.com/upload/goadmin/2021/04/30/136/161976551547410389_120x120_85.png"
}, {
    'id': 5,
    "name": "运动外套",
    "icon": "https://a.vpimg3.com/upload/goadmin/2021/04/30/182/161976549010310505_120x120_85.png"
}, {
    'id': 6,
    "name": "小白鞋",
    "icon": "https://a.vpimg3.com/upload/goadmin/2020/08/27/120/159851834896610430_120x120_85.jpg"
}, {
    'id': 7,
    "name": "面膜",
    "icon": "https://a.vpimg4.com/upload/category/2018/09/03/47/12d49b8c-35b0-491b-b51c-8f41d803cfec_120x120_85.jpg"
}, {
    'id': 8,
    "name": "洗面奶",
    "icon": "https://a.vpimg4.com/upload/category/2018/09/03/7/52f7971f-2461-4acb-a6f9-69041cd32bfb_120x120_85.jpg"
}, {
    'id': 9,
    "name": "洗发水",
    "icon": "https://a.vpimg4.com/upload/category/2018/06/06/132/d63c6efa-6e6c-4fab-ab32-646d4c1901b5_120x120_85.png"
}, {
    'id': 10,
    "name": "香水",
    "icon": "https://a.vpimg3.com/upload/goadmin/2018/11/16/23/15423695294921_120x120_85.png"
}];
const noticeList = [{
    "id": 3,
    "title": "耐克阿迪超级品牌日丨 第二件1折"
},{
    "id": 4,
    "title": "「发售预告」adiFomClimacool 清风洞洞鞋"
}];
const specialList = [{
    "id": 10,
    "name": "英氏YEEHOO母婴鞋服专场",
    "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/07/10/43/ias_95542c8731b4f3c4b5d2ceba956a3c5c_1135x545_85.jpg",
    "remark": "4.7折封顶",
},{
    "id": 10,
    "name": "斯凯奇SKECHERS男女装/运动户外专场",
    "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/05/26/134/ias_9b6dfacdfc042bab2980bc30952fb84d_1135x545_85.jpg",
    "remark": "2折起",
},{
    "id": 11,
    "name": "马骑顿MQD母婴鞋服专场",
    "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/04/11/147/ias_a7dd43bd6560f6a653cda283f1a2272e_1135x545_85.jpg",
    "remark": "1折起",
},{
    "id": 12,
    "name": "暑期出游穿搭攻略",
    "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2023/07/14/14/ias_1689325102121572568_1135x545_85.jpg",
    "remark": "2.7折封顶",
}];
const goodList = [{
    
}];
/**暴露数据 */
module.exports = {
    maillTitle: maillTitle,
    bannerList: bannerList,
    dynamicList: dynamicList,
    categorieList: categorieList,
    noticeList: noticeList,
    specialList: specialList,
}