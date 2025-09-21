// EdgeOne Pages 云函数 - 最简单版本
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.end(JSON.stringify({
    success: true,
    message: "Hello from EdgeOne Pages API!",
    timestamp: new Date().toISOString(),
    path: req.url,
    method: req.method
  }));
};