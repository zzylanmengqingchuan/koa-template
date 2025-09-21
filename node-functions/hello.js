// 最简单的测试函数
module.exports = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
  });
  res.end('Hello World from EdgeOne Pages!');
};