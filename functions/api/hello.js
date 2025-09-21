// EdgeOne Pages 云函数 - /api/hello
module.exports = async (req, res) => {
  // 设置CORS和响应头
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // 处理OPTIONS请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // 返回API响应
  res.status(200).json({
    success: true,
    message: "Hello from EdgeOne Pages!",
    timestamp: new Date().toISOString(),
    path: req.url,
    method: req.method,
    query: req.query || {},
    headers: {
      'user-agent': req.headers['user-agent'] || 'unknown',
      'host': req.headers.host || 'unknown'
    }
  });
};
