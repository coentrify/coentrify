// Serves the folder it is started in. usage: node scripts/serve.cjs [port]
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const config = require('../capture.config.json');

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const root = process.cwd();
const port = Number(process.argv[2] ?? config.port);

http
  .createServer((request, response) => {
    const name = request.url === '/' ? '/index.html' : request.url.split('?')[0];
    const file = path.join(root, name);
    if (!file.startsWith(root) || !fs.existsSync(file)) {
      response.writeHead(404).end();
      return;
    }
    response.writeHead(200, { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
    response.end(fs.readFileSync(file));
  })
  .listen(port, '127.0.0.1');
