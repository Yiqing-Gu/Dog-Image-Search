const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa()
const port = 3011;

const router = new Router();
require('./routes/router')({ router });

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

module.exports = server;
