// EdgeOne Pages 云函数 - 根路径测试
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.end(JSON.stringify({
    success: true,
    message: "Hello from EdgeOne Pages!",
    timestamp: new Date().toISOString()
  }));
};