import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(
	path.join(import.meta.dirname, 'src/mock/db.json')
);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log(`🚀 JSON Server rodando na porta ${port}`);
	console.log(`📡 API: http://localhost:${port}/api`);
});
