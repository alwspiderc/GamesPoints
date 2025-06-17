const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'src/mock/db.json'));
const middlewares = jsonServer.defaults({
	static: './dist'
});

// Habilitar CORS para todas as origens
server.use(
	cors({
		origin: true,
		credentials: true,
		preflightContinue: false,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
	})
);

server.use(middlewares);

// Servir arquivos estáticos do dist na raiz
server.use('/', jsonServer.defaults.static('./dist'));

// API routes
server.use('/api', router);

// Fallback para React Router (SPA)
server.get('*', (req, res, next) => {
	if (req.path.startsWith('/api')) {
		return next();
	}
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log(`🚀 Servidor rodando na porta ${port}`);
	console.log(`📡 API disponível em http://localhost:${port}/api`);
	console.log(`🌐 Frontend disponível em http://localhost:${port}`);
});
