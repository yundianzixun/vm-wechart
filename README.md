<p align="center">
  <a href="https://shop.100boot.cn" target="_blank">
    <img alt="vm-wechart Logo" width="200" src="https://shop.100boot.cn/images/logo.png">
  </a>
</p>

<p align="center">
  <a href="https://img.shields.io/github/stars/yundianzixun/vm-wechart">
    <img src="https://img.shields.io/github/stars/yundianzixun/vm-wechart" alt="License">
  </a>  
  <a href="https://github.com/yundianzixun/vm-wechart/issues">
    <img src="https://img.shields.io/github/issues/yundianzixun/vm-wechart" alt="License">
  </a>  
  <a href="https://github.com/yundianzixun/vm-wechart/LICENSE">
    <img src="https://img.shields.io/github/license/Tencent/tdesign-miniprogram-starter-retail" alt="License">
  </a>
</p>

# 动力商城小程序
#### 英文名：vm-wechart
#### 中文名：动力商城
这个名字的英文部分“Vibe”指的是“氛围、气氛、情绪”的意思，代表了电商平台所提供的购物体验和服务。而中文名则表达了平台的商业属性。希望这个名字能够传达出购物平台的愉悦和动力，以及商家和用户之间互动的积极性和繁荣性。
动力商城（vm-wechart） 示例小程序，采用微信小程序原生语言框架进行搭建，涵盖完整的电商购物场景需求。

## 预览

<p>请使用微信扫描以下二维码：</p>

 <img src="https://i.postimg.cc/X7bn5ftf/gh-beb964f84374-344.jpg" width = "200" height = "200" alt="动力商城小程序二维码" align=center />


##  项目介绍

### 1. 业务介绍

动力商城小程序是个经典的单店版电商小程序，涵盖了电商的黄金链路流程，从商品->购物车->结算->订单等。小程序总共包含 28 个完整的页面，涵盖首页，商品详情页，个人中心，售后流程等基础页面。采用mock+动态数据进行展示，提供了完整的商品展示、交易与售后流程。页面详情：

<img src="https://shop.100boot.cn/images/software/function-list.jpg" width = "650" height = "900" alt="模版小程序页面详情" align=center />

#### 已完成功能
- 商城首页
- 商城首页 - 搜索商品
- 商城分类

#### 已完成页面截图如下：

<p align="center">
    <img alt="example-home1" width="200" src="https://shop.100boot.cn/images/software/home01.jpeg" />
    <img alt="example-home2" width="200" src="https://shop.100boot.cn/images/software/home02.jpeg" />
    <img alt="example-home3" width="200" src="https://shop.100boot.cn/images/software/home03.jpeg" />
    <img alt="example-sort" width="200" src="https://shop.100boot.cn/category.jpeg" />
</p>

### 2. 项目构成

动力商城小程序是基于原生开发的小程序，使用的是微信提供的 JavaScript、WXML、WXSS进行构建，学习和二次开发门槛低。

项目目录结构如下：
```
|-- vm-wechart
    |-- README.md
    |-- app.js
    |-- app.json
    |-- app.wxss
    |-- components	//	公共组件库
    |-- config	//	基础配置
    |-- model	//	mock 数据
    |-- pages
    |   |-- cart	//	购物车相关页面
    |   |-- home	//	首页
    |   |-- goods	//	商品相关页面
    |   |-- usercenter	//	个人中心及收货地址相关页面
    |-- services	//	请求接口
    |-- style	//	公共样式与iconfont
    |-- utils	//	工具库
```

### 3. 数据模拟

动力商城小程序采用真实的接口数据，直接调用后端返回逻辑，在小程序展示完整的购物场景与购物体验逻辑。

### 4. 添加新页面

1. 在 `pages `目录下创建对应的页面文件夹
2. 在 `app.json` 文件中的 ` "pages"` 数组中加上页面路径
3. [可选] 在 `project.config.json` 文件的 `"miniprogram-list"` 下添加页面配置

## 5. 构建运行

1. `npm install`
2. 小程序开发工具中引入工程
3. 构建 npm

## 6. 基础库版本

最低基础库版本`^2.6.5`

## 7. 反馈

邮件联系：zhenghhgz@163.com
小编微信：zhenghhgz

##  开源协议

动力商城 遵循 [MIT 协议]



