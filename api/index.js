// Dados mock para a API
const mockData = {
	rooms: [
		{
			id: '1',
			nome: 'Mario Kart',
			nameRoom: 'Corrida insana',
			description: 'Partida final do campeonato de Mario Kart.',
			imagem:
				'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80',
			data: '2024-06-01',
			playersList: [
				{
					id: '1',
					name: 'Teca',
					image:
						'https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg',
					score: 7,
					description: 'Jogador 1'
				},
				{
					id: '2',
					name: 'Jon',
					image:
						'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
					score: 6,
					description: 'Jogador 2'
				},
				{
					id: '3',
					name: 'Val',
					image:
						'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
					score: 5,
					description: 'Jogador 3'
				},
				{
					id: '4',
					name: 'Lia',
					image:
						'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg',
					score: 6,
					description: 'Jogador 4'
				}
			]
		},
		{
			id: 'd8db',
			nome: 'Ludo',
			nameRoom: 'Jogão',
			description: 'asdsadsad',
			imagem:
				'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80',
			data: '2025-06-01',
			players: 0,
			playersList: [
				{
					name: 'sdadsdsddsd',
					description: 'dsadasdsads',
					image:
						'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
					score: 0
				}
			]
		}
	]
};

// Função para ler o banco de dados
function getDatabase() {
	return mockData;
}

export default function handler(req, res) {
	// Habilitar CORS
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	// Responder OPTIONS para preflight requests
	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}

	const { url, method } = req;
	const db = getDatabase();

	// Extrair o path da URL (remove /api/)
	const path = url.replace('/api/', '').split('?')[0];
	const pathParts = path.split('/').filter(Boolean);

	try {
		// GET /api/rooms - Retorna todas as salas
		if (
			method === 'GET' &&
			pathParts[0] === 'rooms' &&
			pathParts.length === 1
		) {
			res.status(200).json(db.rooms);
			return;
		}

		// GET /api/rooms/:id - Retorna uma sala específica
		if (
			method === 'GET' &&
			pathParts[0] === 'rooms' &&
			pathParts.length === 2
		) {
			const roomId = pathParts[1];
			const room = db.rooms.find((r) => r.id === roomId);

			if (room) {
				res.status(200).json(room);
			} else {
				res.status(404).json({ error: 'Room not found' });
			}
			return;
		}

		// POST /api/rooms - Criar nova sala
		if (method === 'POST' && pathParts[0] === 'rooms') {
			const newRoom = {
				id: Date.now().toString(),
				...req.body,
				playersList: req.body.playersList || []
			};

			res.status(201).json(newRoom);
			return;
		}

		// PUT/PATCH /api/rooms/:id - Atualizar sala
		if (
			(method === 'PUT' || method === 'PATCH') &&
			pathParts[0] === 'rooms' &&
			pathParts.length === 2
		) {
			const roomId = pathParts[1];
			const room = db.rooms.find((r) => r.id === roomId);

			if (room) {
				const updatedRoom = { ...room, ...req.body };
				res.status(200).json(updatedRoom);
			} else {
				res.status(404).json({ error: 'Room not found' });
			}
			return;
		}

		// DELETE /api/rooms/:id - Deletar sala
		if (
			method === 'DELETE' &&
			pathParts[0] === 'rooms' &&
			pathParts.length === 2
		) {
			res.status(200).json({ message: 'Room deleted successfully' });
			return;
		}

		// Rota não encontrada
		res.status(404).json({ error: 'Route not found' });
	} catch (error) {
		console.error('API Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}
