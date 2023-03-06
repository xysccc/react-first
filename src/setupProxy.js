/*
 * @Description:反向代理解决本地跨域
 * @Author: YuShuXiao 949516815@qq.com
 * @Date: 2023-03-05 13:57:48
 * @LastEditors: YuShuXiao 949516815@qq.com
 * @LastEditTime: 2023-03-06 10:57:01
 * @FilePath: \react practive\newssystem\src\setupProxy.js
 */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ajax',
    createProxyMiddleware({
      target: 'https://m.maoyan.com',
      changeOrigin: true,
    })
  );
};