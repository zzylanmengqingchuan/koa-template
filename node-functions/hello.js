// 最简单的测试函数
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.json({
    success: true,
    message: "Hello from EdgeOne Pages!",
    timestamp: new Date().toISOString(),
    path: req.url,
    method: req.method
  });
};
