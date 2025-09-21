// EdgeOne Pages 云函数 - /hello (根路径测试)
module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.status(200).json({
    success: true,
    message: "Hello from EdgeOne Pages Root!",
    timestamp: new Date().toISOString(),
    note: "这是根路径 /hello 的测试函数"
  });
};
