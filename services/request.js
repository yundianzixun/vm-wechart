var config = require('../config.js');
// 封装GET请求
function GET(url, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: config.subDomain +url,
            method: 'GET',
            header: {
                'content-type': 'application/json',
                'authKey': config.authKey
            },
            data: data,
            success: function (res) {
                resolve(res.data);
            },
            fail: function (error) {
                reject(error);
            }
        });
    });
};
// 封装POST请求
function POST(url, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: config.subDomain+url,
            method: 'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'authKey': config.authKey
            },
            data: data,
            success: function (res) {
                resolve(res.data);
            },
            fail: function (error) {
                reject(error);
            }
        });
    });
}
module.exports = {
    GET: GET,
    POST: POST,
}