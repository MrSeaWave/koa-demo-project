import Koa from 'koa';
import ip from 'ip';
import { startLog } from './config/debuggerConfig';
import config from './utils/config';
const { port } = config;
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(port, () => {
  const text = `
   App running at:
    - Local:   http://localhost:${port} (copied to clipboard)
    - Network: http://${ip.address()}:${port}
  `;
  startLog(text);
  // eslint-disable-next-line no-console
  console.log(text);
});
