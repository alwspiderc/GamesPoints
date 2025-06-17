// Configuração da API
export const API_BASE_URL =
	'https://my-json-server.typicode.com/alwspiderc/GamesPoints';

// Endpoints da API
export const API_ENDPOINTS = {
	rooms: `${API_BASE_URL}/rooms`,
	getRoom: (id) => `${API_BASE_URL}/rooms/${id}`,
	players: `${API_BASE_URL}/players`,
	getPlayer: (id) => `${API_BASE_URL}/players/${id}`
};

// Utilitário para fazer requisições
export const apiRequest = async (url, options = {}) => {
	try {
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				...options.headers
			},
			...options
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error('API Request Error:', error);
		throw error;
	}
};
