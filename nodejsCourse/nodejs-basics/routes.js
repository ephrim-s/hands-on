const http = require('http');

const server = http.createServer((req, res)=>{
  const url = req.url;
  if(url === '/'){
    res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Home Page");
  } else if (url === '/project') {
    res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("project Page");
  } else {
    res.writeHead(404, {"Content": "text/plain"});
    res.end("Page not found");
  }
});

const port = 3000;
server.listen(port, ()=>{
  console.log(`Server started on port:${port}`);
});