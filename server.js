// server.js
const next = require('next');
const { parse } = require('url');
const { createServer } = require('http');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, quiet: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	createServer((req, res) => {
		// Be sure to pass `true` as the second argument to `url.parse`.
		// This tells it to parse the query portion of the URL.
		const parsedUrl = parse(req.url, true);

		handle(req, res, parsedUrl);
	}).listen(process.env.PORT || 3000, (err) => {
		if (err) throw err;
		console.log('> Application is ready');
	});
});
