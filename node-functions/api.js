// EdgeOne Pages Node Function - 最简单工作版本
const http = require('http');

module.exports = (req, res) => {
  // 设置响应头
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  
  // 返回简单JSON响应
  const response = {
    success: true,
    message: "Hello from EdgeOne Pages!",
    timestamp: new Date().toISOString(),
    path: req.url,
    method: req.method
  };
  
  res.end(JSON.stringify(response, null, 2));
};