const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    const data = {
      message: 'Home',
    };
    res.end(JSON.stringify(data));
  } else if (req.url==='/is-12fiot-21-157') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    const data = {
      name: 'Катерина',
      surname: 'Мельникова',
      course: '2',
      group: 'ІС-12'
    };
    res.end(JSON.stringify(data));
  }
  else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
