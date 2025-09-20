// EdgeOne Pages Express 应用
const express = require('express');
const app = express();

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
  skills: ["JavaScript", "Node.js", "React", "Vue", "Python", "Express"],
  timestamp: new Date().toISOString()
};

// CORS 中间件
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// JSON 解析中间件
app.use(express.json());

// 根路径 - 返回完整个人信息
app.get('/', (req, res) => {
  res.json({
    success: true,
    data: personalInfo,
    message: "个人名片API - 获取成功",
    timestamp: new Date().toISOString()
  });
});

// 健康检查
app.get('/health', (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
    message: "API服务运行正常"
  });
});

// 个人链接
app.get('/links', (req, res) => {
  res.json({
    success: true,
    data: personalInfo.links,
    message: "获取个人链接成功"
  });
});

// 技能列表
app.get('/skills', (req, res) => {
  res.json({
    success: true,
    data: personalInfo.skills,
    message: "获取技能列表成功"
  });
});

// 联系方式
app.get('/contact', (req, res) => {
  res.json({
    success: true,
    data: personalInfo.contact,
    message: "获取联系方式成功"
  });
});

// 404处理
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: "API接口不存在",
    requestPath: req.originalUrl,
    availableEndpoints: [
      "GET / - 获取完整个人信息",
      "GET /links - 获取个人链接", 
      "GET /skills - 获取技能列表",
      "GET /contact - 获取联系方式",
      "GET /health - 健康检查"
    ]
  });
});

// 错误处理
app.use((err, req, res, next) => {
  console.error('Express 错误:', err);
  res.status(500).json({
    success: false,
    message: "服务器内部错误",
    error: err.message
  });
});

module.exports = app;
