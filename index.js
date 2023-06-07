
const Koa = require('koa');

const app = new Koa();
const homeRoutes = require('./src/server/homeRoutes');
const path = require('path');
const render = require('./src/lib/render');
const serve = require('koa-static');

app.use(render);
app.use(serve(path.resolve(__dirname, './src/client')));
app
    .use(homeRoutes.routes())
    .use(homeRoutes.allowedMethods());

app.listen(3000);
