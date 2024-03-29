﻿var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/yitaofang';

/**
 * 连接
 */
mongoose.connect(DB_URL, {useNewUrlParser:true});

mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
mongoose.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});

// 房源模型
var House = new mongoose.Schema({
    // 标题
    title: {type: String},

    // 描述
    description: {type: String},

    // 上传图片的url数组
    imageURLs: {type: Array},

    // 出售类型
    saleType: {type: String},

    // 发布的租房类型
    rentType: {type: String},

    // 位置
    position: {type: Object},

    // 租金/售价
    price: {type: Number},

    // 房型
    houseLayout: {type: Array},

    // 装修程度
    decorationDegree: {type: String},

    // 房屋面积
    houseArea: {type: Number},

    // 入住时间
    checkInTime: {type: Date},

    // 标签列表
    tagsList: {type: Array},

    // 发布者的账号
    ownerAccount: {type: String},

    // 城市
    city: {type: String},

    // 状态
    status: {type: String},

    // 是否委托中介
    isEntrust: {type: Boolean},

    // 委托的中介code
    angentCode: {type: String},

    // 发布时间
    publishTime: {type: Date},

    // 被收藏数
    collectedCount: {type: Number, default: 0},

    // 被浏览数
    browsedCount: {type: Number, default: 0}
});

// 用户模型
var User = new mongoose.Schema({
    // 账号
    account: {type: String},

    // 密码
    passWord: {type: String},

    // 用户类别
    userType: {type: Number},

    // 中介编号
    agentCode: {type: String},

    // 中介是否认证通过
    isCertificationPassed: {type: Boolean, default: false},

    // 手机号
    phoneNumber: {type: Number},

    // 头像
    avatar: {type: String, default: 'http://yougoufang.oss-cn-hongkong.aliyuncs.com/YouGouFangDefultAvator.png'},

    // 邮箱
    email: {type: String, default: ''},

    // 用户简介
    introduction: {type: String, default: ''},

    // 关注列表
    followList: {type: Array, default: []},

    // 粉丝列表
    fansList: {type: Array, default: []},

    // 用户标签列表
    tagList: {type: Array, default: []},

    // 用户星级
    starLevel: {type: Number, default: 0},

    // 收藏房源列表
    collectionList: {type: Array, default: []},

    // 所有已发布房源列表(包括在售和已售)
    houseList: {type: Array, default: []},

    // 在售房源列表
    onSaleList: {type: Array, default: []},

    // 订单列表
    orderList: {type: Array, default: []}
})


// 预约订单模型
var Order = new mongoose.Schema({
    // 房源_id(注意这里存的是string类型的)
    house_id: {type: String},

    // 买家账户
    buyerAccount: {type: String},

    // 房东账户
    ownerAccount: {type: String},

    // 预约看房时间
    bookingDate: {type: Date},

    // 预约订单生成时间
    createdTime: {type: Date},

    // 订单状态
    status: {type: String, default: 'waitOwnerConfirm'},

    // 房东评价
    ownerComment: {type: String, default: ''},

    // 房东星评
    ownerCommentStar: {type: Number, default: 0},

    // 买家评价
    buyerComment: {type: String, default: ''},

    // 买家星评
    buyerCommentStar: {type: Number, default: 0},

})

var Chat = new mongoose.Schema({
    // 消息的唯一标识(区别收发双方)
    chatUid: {type: String},

    // 发送方
    from: {type: String},

    // 接收方
    to: {type: String},

    // 是否已读(只针对接收方)
    read: {type: Boolean, default: false},

    // 消息内容
    content: {type: String},

    // 创建时间
    createdTime: {type: Date, default: new Date(Date.now())}

})


// 整个易淘房模型
 var YiTaoFangModel = {
    HouseModel: mongoose.model('house', House),
    UserModel: mongoose.model('user', User),
    OrderModel: mongoose.model('order', Order),
    ChatModel: mongoose.model('chat', Chat),
}

module.exports = YiTaoFangModel;

