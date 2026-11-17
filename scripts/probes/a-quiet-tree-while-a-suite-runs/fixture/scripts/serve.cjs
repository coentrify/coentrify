// Serves the folder it is started in, straight from disk, so a saved file shows on the next load.
// usage: node scripts/serve.cjs [port]
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const root = process.cwd();

const server = http.createServer((request, response) => {
  const name = request.url === '/' ? '/index.html' : request.url.split('?')[0];
  const file = path.join(root, name);
  if (!file.startsWith(root) || !fs.existsSync(file)) {
    response.writeHead(404).end();
    return;
  }
  response.writeHead(200, { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
  response.end(fs.readFileSync(file));
});

server.listen(Number(process.argv[2] ?? 0), '127.0.0.1', () => {
  console.log(`listening on ${server.address().port}`);
});
