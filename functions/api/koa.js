// EdgeOne Pages 云函数 - Koa个人名片API
module.exports = async (req, res) => {
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

  // 设置响应头
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // 处理OPTIONS请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  try {
    // 简单路由处理
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    
    if (pathname.endsWith('/health')) {
      // 健康检查
      return res.status(200).json({
        success: true,
        status: "healthy",
        timestamp: new Date().toISOString(),
        message: "API服务运行正常"
      });
    } else if (pathname.endsWith('/links')) {
      // 个人链接
      return res.status(200).json({
        success: true,
        data: personalInfo.links,
        message: "获取个人链接成功"
      });
    } else if (pathname.endsWith('/skills')) {
      // 技能列表
      return res.status(200).json({
        success: true,
        data: personalInfo.skills,
        message: "获取技能列表成功"
      });
    } else if (pathname.endsWith('/contact')) {
      // 联系方式
      return res.status(200).json({
        success: true,
        data: personalInfo.contact,
        message: "获取联系方式成功"
      });
    } else {
      // 默认返回完整信息
      return res.status(200).json({
        success: true,
        data: personalInfo,
        message: "个人名片API - 获取成功",
        timestamp: new Date().toISOString()
      });
    }
  } catch (error) {
    console.error('API处理错误:', error);
    return res.status(500).json({
      success: false,
      message: "服务器内部错误",
      error: error.message
    });
  }
};
