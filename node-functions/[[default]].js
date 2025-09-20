// EdgeOne Pages 云函数入口文件 - CommonJS兼容版本
const Koa = require('koa');

const app = new Koa();

// 个人信息数据
const personalInfo = {
  name: "个人名片",
  title: "全栈开发工程师",
  avatar: "https://avatars.githubusercontent.com/u/your-avatar",
  bio: "热爱技术，专注于前后端开发",
  links: [
    { name: 'Blog', url: 'https://blog.csdn.net/binhyun?type=blog', icon: '📝' },
    { name: 'GitHub', url: 'https://github.com/zzylanmengqingchuan', icon: '💻' },
    { name: '知识星球', url: 'https://wx.zsxq.com/group/28882558852421', icon: '🌟' },
    { name: '腾讯云社区', url: 'https://cloud.tencent.com/developer/user/11163219', icon: '☁️' }
  ],
  contact: {
    email: "your-email@example.com",
    location: "中国"
  },
  skills: ["JavaScript", "Node.js", "React", "Vue", "Python", "Koa"],
  timestamp: new Date().toISOString()
};

// 设置CORS中间件
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

// 主处理中间件 - 简化路由处理
app.use(async (ctx) => {
  ctx.type = 'application/json';
  
  const path = ctx.path;
  console.log('访问路径:', path); // 调试日志
  
  try {
    if (path === '/' || path === '') {
      // 根路径 - 返回完整信息
      ctx.body = {
        success: true,
        data: personalInfo,
        message: "个人名片API - 获取成功",
        timestamp: new Date().toISOString()
      };
    } else if (path === '/health') {
      // 健康检查
      ctx.body = {
        success: true,
        status: "healthy",
        timestamp: new Date().toISOString(),
        message: "API服务运行正常"
      };
    } else if (path === '/links') {
      // 个人链接
      ctx.body = {
        success: true,
        data: personalInfo.links,
        message: "获取个人链接成功"
      };
    } else if (path === '/skills') {
      // 技能列表
      ctx.body = {
        success: true,
        data: personalInfo.skills,
        message: "获取技能列表成功"
      };
    } else if (path === '/contact') {
      // 联系方式
      ctx.body = {
        success: true,
        data: personalInfo.contact,
        message: "获取联系方式成功"
      };
    } else {
      // 404处理
      ctx.status = 404;
      ctx.body = {
        success: false,
        message: "API接口不存在",
        requestPath: path,
        availableEndpoints: [
          "GET / - 获取完整个人信息",
          "GET /links - 获取个人链接",
          "GET /skills - 获取技能列表", 
          "GET /contact - 获取联系方式",
          "GET /health - 健康检查"
        ]
      };
    }
  } catch (error) {
    console.error('处理请求时出错:', error);
    ctx.status = 500;
    ctx.body = {
      success: false,
      message: "服务器内部错误",
      error: error.message
    };
  }
});

// 错误处理
app.on('error', (err, ctx) => {
  console.error('应用错误:', err);
});

module.exports = app;