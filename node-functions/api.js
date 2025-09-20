// 简化版API - 测试用
const Koa = require('koa');
const app = new Koa();

// 个人信息数据
const personalInfo = {
  name: "个人名片",
  title: "全栈开发工程师",
  links: [
    { name: 'Blog', url: 'https://blog.csdn.net/binhyun?type=blog', icon: '📝' },
    { name: 'GitHub', url: 'https://github.com/zzylanmengqingchuan', icon: '💻' },
    { name: '知识星球', url: 'https://wx.zsxq.com/group/28882558852421', icon: '🌟' },
    { name: '腾讯云社区', url: 'https://cloud.tencent.com/developer/user/11163219', icon: '☁️' }
  ],
  skills: ["JavaScript", "Node.js", "React", "Vue", "Python", "Koa"],
  timestamp: new Date().toISOString()
};

// 设置CORS
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (ctx.method === 'OPTIONS') {
    ctx.status = 200;
    return;
  }
  
  await next();
});

// 主处理器
app.use(async (ctx) => {
  ctx.type = 'application/json';
  
  // 简单路由判断
  const path = ctx.path;
  
  if (path === '/' || path === '') {
    ctx.body = {
      success: true,
      data: personalInfo,
      message: "个人名片API - 获取成功"
    };
  } else if (path === '/health') {
    ctx.body = {
      success: true,
      status: "healthy",
      timestamp: new Date().toISOString(),
      message: "API服务运行正常"
    };
  } else if (path === '/links') {
    ctx.body = {
      success: true,
      data: personalInfo.links,
      message: "获取个人链接成功"
    };
  } else {
    ctx.status = 404;
    ctx.body = {
      success: false,
      message: "API接口不存在",
      path: path,
      availableEndpoints: [
        "GET / - 获取完整个人信息",
        "GET /links - 获取个人链接",
        "GET /health - 健康检查"
      ]
    };
  }
});

module.exports = app;
