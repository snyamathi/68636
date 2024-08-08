import http from "node:http";

http
  .createServer(async (req, res) => {
    const response = await fetch("http://counting-service:9001", {
      headers: req.headers,
    });
    const { count } = await response.json();
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<pre>${count}</pre>`);
  })
  .listen(3000);
