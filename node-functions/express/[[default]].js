const express = require("express");
const app = express();

// 中间件
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

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
  skills: ["JavaScript", "Node.js", "React", "Vue", "Python", "Express"],
  timestamp: new Date().toISOString()
};

// 路由
app.get("/", (req, res) => {
  res.json({
    success: true,
    data: personalInfo,
    message: "个人名片API - 获取成功",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
    message: "API服务运行正常"
  });
});

app.get("/links", (req, res) => {
  res.json({
    success: true,
    data: personalInfo.links,
    message: "获取个人链接成功"
  });
});

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "服务器内部错误"
  });
});

module.exports = app;