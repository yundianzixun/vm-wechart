const categoryList = [{
    'id': 1,
    "name": "新品",
    "logo": "https://a.vpimg3.com/upload/goadmin/2022/05/31/154/165396603458510188_120x120_85.jpg"
}, {
    'id': 2,
    "name": "尖货",
    "logo": "https://a.vpimg3.com/upload/goadmin/2022/05/31/27/165396601947210147_120x120_85.jpg"
}, {
    'id': 3,
    "name": "经典",
    "logo": "https://a.vpimg3.com/upload/goadmin/2022/05/31/36/165396613625210052_120x120_85.jpg"
}, {
    'id': 4,
    "name": "热搜",
    "logo": "https://a.vpimg3.com/upload/goadmin/2021/04/30/136/161976551547410389_120x120_85.png"
}, {
    'id': 5,
    "name": "穿搭",
    "logo": "https://a.vpimg3.com/upload/goadmin/2021/04/30/182/161976549010310505_120x120_85.png"
}, {
    'id': 6,
    "name": "服饰",
    "logo": "https://a.vpimg3.com/upload/goadmin/2020/08/27/120/159851834896610430_120x120_85.jpg"
}, {
    'id': 7,
    "name": "品牌",
    "logo": "https://a.vpimg4.com/upload/category/2018/09/03/47/12d49b8c-35b0-491b-b51c-8f41d803cfec_120x120_85.jpg"
}, {
    'id': 8,
    "name": "户外",
    "logo": "https://a.vpimg4.com/upload/category/2018/09/03/7/52f7971f-2461-4acb-a6f9-69041cd32bfb_120x120_85.jpg"
}];
const categoryChildList = [{
    'id': 10,
    "name": "T恤",
    "logo": "https://a.vpimg3.com/upload/goadmin/2022/05/31/154/165396603458510188_120x120_85.jpg",
    "pid":1
}, {
    'id': 11,
    "name": "连衣裙",
    "logo": "https://a.vpimg3.com/upload/goadmin/2022/05/31/27/165396601947210147_120x120_85.jpg",
    "pid":1
}, {
    'id': 12,
    "name": "半截裙",
    "logo": "https://a.vpimg3.com/upload/goadmin/2022/05/31/36/165396613625210052_120x120_85.jpg",
    "pid":1
}, {
    'id': 13,
    "name": "休闲鞋",
    "logo": "https://a.vpimg3.com/upload/goadmin/2021/04/30/136/161976551547410389_120x120_85.png",
    "pid":1
}, {
    'id': 14,
    "name": "运动外套",
    "logo": "https://a.vpimg3.com/upload/goadmin/2021/04/30/182/161976549010310505_120x120_85.png",
    "pid":1
}, {
    'id': 15,
    "name": "小白鞋",
    "logo": "https://a.vpimg3.com/upload/goadmin/2020/08/27/120/159851834896610430_120x120_85.jpg",
    "pid":2
}, {
    'id': 16,
    "name": "面膜",
    "logo": "https://a.vpimg4.com/upload/category/2018/09/03/47/12d49b8c-35b0-491b-b51c-8f41d803cfec_120x120_85.jpg",
    "pid":2
}, {
    'id': 17,
    "name": "洗面奶",
    "logo": "https://a.vpimg4.com/upload/category/2018/09/03/7/52f7971f-2461-4acb-a6f9-69041cd32bfb_120x120_85.jpg",
    "pid":2
}, {
    'id': 18,
    "name": "护肤套装",
    "logo": "https://a.vpimg3.com/upload/goadmin/2019/05/15/76/15579019211223_120x120_85.png",
    "pid":2
}, {
    'id': 19,
    "name": "面霜",
    "logo": "https://a.vpimg3.com/upload/goadmin/2018/11/16/78/15423687943281_120x120_85.png",
    "pid":2
}, {
    'id': 20,
    "name": "面部精华",
    "logo": "https://a.vpimg3.com/upload/goadmin/2018/11/16/56/15423690424467_120x120_85.png",
    "pid":2
}, {
    'id': 21,
    "name": "口红",
    "logo": "https://a.vpimg3.com/upload/goadmin/2018/11/16/198/15423697609886_120x120_85.png",
    "pid":2
}, {
    'id': 22,
    "name": "洗发水",
    "logo": "https://a.vpimg4.com/upload/category/2018/06/06/132/d63c6efa-6e6c-4fab-ab32-646d4c1901b5_120x120_85.png",
    "pid":3
}, {
    'id': 23,
    "name": "香水",
    "logo": "https://a.vpimg3.com/upload/goadmin/2018/11/16/23/15423695294921_120x120_85.png",
    "pid":3
}, {
    'id': 24,
    "name": "防晒",
    "logo": "https://a.vpimg4.com/upload/category/2017/06/26/48/86fcb18b-862f-4252-9f6c-821230fec905_120x120_85.jpg",
    "pid":3
}, {
    'id': 25,
    "name": "沐浴露",
    "logo": "https://a.vpimg4.com/upload/category/2017/11/06/85/0fbaedcb-2db1-4eb5-b3c9-b351021c98a1_120x120_85.png",
    "pid":3
}, {
    'id': 26,
    "name": "牙膏",
    "logo": "https://a.vpimg4.com/upload/category/2017/11/06/195/9a3e849b-189b-4dd5-9fbf-338d5b34109c_120x120_85.png",
    "pid":3
}, {
    'id': 27,
    "name": "洁面",
    "logo": "https://a.vpimg3.com/upload/goadmin/2018/11/16/75/15423691639756_120x120_85.jpg",
    "pid":3
}, {
    'id': 28,
    "name": "跑步鞋",
    "logo": "https://c.vpimg1.com/upcb/2021/05/18/191/ias_9e1b800d93b6c3f0f52c9a968d18d0f6_120x120_85.png",
    "pid":4
}, {
    'id': 29,
    "name": "女凉鞋",
    "logo": "https://d.vpimg1.com/upcb/2021/04/04/165/ias_2ceabb5c346f3749dda7c7c9260d7c2e_120x120_85.png",
    "pid":4
}, {
    'id': 30,
    "name": "T恤",
    "logo": "https://a.vpimg3.com/upload/goadmin/2022/05/31/154/165396603458510188_120x120_85.jpg",
    "pid":4
}, {
    'id': 31,
    "name": "女式衬衫",
    "logo": "https://d.vpimg1.com/upcb/2023/04/13/49/ias_1e0eed83f9be4ca44366afc3d2722b6a_120x120_85.png",
    "pid":4
}, {
    'id': 32,
    "name": "裙子",
    "logo": "https://a.vpimg3.com/upload/goadmin/2022/05/31/27/165396601947210147_120x120_85.jpg",
    "pid":5
}, {
    'id': 33,
    "name": "下衣群",
    "logo": "https://a.vpimg3.com/upload/goadmin/2022/05/31/36/165396613625210052_120x120_85.jpg",
    "pid":5
}, {
    'id': 34,
    "name": "休闲裤",
    "logo": "https://a.vpimg3.com/upload/goadmin/2023/06/08/18/168621428363410399_120x120_85.jpg",
    "pid":6
}, {
    'id': 35,
    "name": "半身裙",
    "logo": "https://a.vpimg3.com/upload/goadmin/2023/06/08/98/168621434378410934_120x120_85.jpg",
    "pid":6
}, {
    'id': 36,
    "name": "女式西服",
    "logo": "https://a.vpimg3.com/upload/goadmin/2023/06/08/123/168621438662610087_120x120_85.jpg",
    "pid":6
}, {
    'id': 37,
    "name": "套装",
    "logo": "https://a.vpimg3.com/upload/goadmin/2023/06/08/132/168621441018910099_120x120_85.jpg",
    "pid":6
}, {
    'id': 38,
    "name": "牛仔裤",
    "logo": "https://a.vpimg3.com/upload/goadmin/2023/06/08/64/168621433163210367_120x120_85.jpg",
    "pid":6
}, {
    'id': 39,
    "name": "短裤",
    "logo": "https://a.vpimg3.com/upload/goadmin/2023/06/15/176/168679943009510900_120x120_85.png",
    "pid":6
}, {
    'id': 40,
    "name": "牛仔裤男",
    "logo": "https://a.vpimg3.com/upload/goadmin/2019/09/02/191/15674086009791_120x120_85.png",
    "pid":6
}, {
    'id': 41,
    "name": "束脚裤",
    "logo": "https://a.vpimg3.com/upload/goadmin/2019/09/02/40/15674091462171_120x120_85.png",
    "pid":6
}, {
    'id': 42,
    "name": "百丽",
    "logo": "https://c.vpimg1.com/upcb/2021/03/26/39/ias_368db81b82b639a38d28bc49d1128160_120x120_85.png",
    "pid":7
}, {
    'id': 43,
    "name": "安踏",
    "logo": "https://c.vpimg1.com/upcb/2023/04/27/16/ias_f71df89715e89712cdc7580a43bb08da_120x120_85.png",
    "pid":7
}, {
    'id': 44,
    "name": "阿迪达斯",
    "logo": "https://d.vpimg1.com/upcb/2022/04/27/192/ias_f42f04f5f3c638a419e46f4e47aece7e_120x120_85.png",
    "pid":7
}, {
    'id': 45,
    "name": "斐乐",
    "logo": "https://d.vpimg1.com/upcb/2021/03/30/53/ias_ba2f13c9047f601c86c2ac3398df36e4_120x120_85.png",
    "pid":7
}, {
    'id': 46,
    "name": "耐克",
    "logo": "https://c.vpimg1.com/upcb/2021/08/21/187/ias_fa27e884518e3dea7ad510ee199846b2_120x120_85.png",
    "pid":7
}, {
    'id': 47,
    "name": "运动卫衣",
    "logo": "https://a.vpimg3.com/upload/goadmin/2021/03/25/19/161664147626410064_120x120_85.png",
    "pid":8
}, {
    'id': 48,
    "name": "运动外套",
    "logo": "https://a.vpimg3.com/upload/goadmin/2021/04/30/182/161976549010310505_120x120_85.png",
    "pid":8
}, {
    'id': 49,
    "name": "运动T恤",
    "logo": "https://a.vpimg3.com/upload/goadmin/2022/03/30/50/164860673393510966_120x120_85.jpg",
    "pid":8
}, {
    'id': 50,
    "name": "跑步鞋",
    "logo": "https://a.vpimg3.com/upload/goadmin/2021/04/30/18/161976543853010401_120x120_85.png",
    "pid":8
}, {
    'id': 51,
    "name": "运动休闲鞋",
    "logo": "https://a.vpimg3.com/upload/goadmin/2021/04/30/136/161976551547410389_120x120_85.png",
    "pid":8
}];
/**暴露数据 */
module.exports = {
    categoryList: categoryList,
    categoryChildList: categoryChildList,
}