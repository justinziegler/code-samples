
const Koa = require('koa');

const app = new Koa();
const homeRoutes = require('./server/homeRoutes');
const path = require('path');
const render = require('./lib/render');
const serve = require('koa-static');

app.use(render);
app.use(serve(path.resolve(__dirname, './client')));
app
    .use(homeRoutes.routes())
    .use(homeRoutes.allowedMethods());

app.listen(3000);
