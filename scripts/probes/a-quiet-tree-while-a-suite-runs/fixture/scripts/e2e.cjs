// Runs the e2e suite against a dev server of its own, on a free port, and keeps a line per run in .e2e-runs.log.
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const LOG = '.e2e-runs.log';

function devServer() {
  return new Promise((resolve) => {
    const server = spawn(process.execPath, [path.join(__dirname, 'serve.cjs')], { stdio: ['ignore', 'pipe', 'inherit'] });
    server.stdout.once('data', (data) => resolve({ server, port: String(data).match(/\d+/)[0] }));
  });
}

(async () => {
  const { server, port } = await devServer();
  fs.appendFileSync(LOG, `start ${Date.now()}\n`);
  const specs = fs.readdirSync('e2e').filter((name) => name.endsWith('.test.cjs')).map((name) => path.join('e2e', name));
  const suite = spawn(process.execPath, ['--test', ...specs], { stdio: 'inherit', env: { ...process.env, BASE_URL: `http://127.0.0.1:${port}/` } });
  suite.on('exit', (code) => {
    fs.appendFileSync(LOG, `end ${Date.now()} ${code}\n`);
    server.kill();
    process.exit(code ?? 1);
  });
})();
