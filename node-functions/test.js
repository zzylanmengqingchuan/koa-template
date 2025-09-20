// 测试文件 - 本地开发测试用
const app = require('./koa/[[default]]');

const PORT = process.env.PORT || 3001;

// 本地测试服务器
const server = app.listen(PORT, () => {
  console.log(`🚀 测试服务器启动成功！`);
  console.log(`📍 本地访问地址: http://localhost:${PORT}`);
  console.log(`📋 可用的API接口:`);
  console.log(`   GET / - 获取完整个人信息`);
  console.log(`   GET /links - 获取个人链接`);
  console.log(`   GET /skills - 获取技能列表`);
  console.log(`   GET /contact - 获取联系方式`);
  console.log(`   GET /health - 健康检查`);
});

// 优雅关闭
process.on('SIGTERM', () => {
  console.log('👋 正在关闭服务器...');
  server.close(() => {
    console.log('✅ 服务器已关闭');
    process.exit(0);
  });
});
