// 最简单的EdgeOne Pages函数
module.exports = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  
  res.end(JSON.stringify({
    success: true,
    message: "SUCCESS! EdgeOne Pages is working!",
    timestamp: new Date().toISOString(),
    url: req.url
  }));
};