import React, { useState, useEffect } from 'react';
import { Modal, Form, Row, Col, Alert } from 'react-bootstrap';
import { Button } from '../components/Button';
import { API_ENDPOINTS } from '../config/api';

export function CreateRoomModal({ show, onHide, onCreate, room }) {
	const [form, setForm] = useState({
		game: '',
		nameRoom: '',
		date: '',
		description: '',
		image: null
	});
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		if (room) {
			setForm({
				game: room.nome,
				nameRoom: room.nameRoom,
				date: room.data,
				description: room.description,
				image: null
			});
		} else {
			setForm({
				game: '',
				nameRoom: '',
				date: new Date().toISOString().split('T')[0],
				description: '',
				image: null
			});
		}
	}, [room, show]);

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: files ? files[0] : value
		}));
	};

	const handleSubmit = () => {
		if (!form.game || !form.nameRoom || !form.date || !form.description) {
			setError('Por favor, preencha todos os campos obrigatórios.');
			setSuccess(false);
			return;
		}
		setError('');
		setSuccess(true);

		const randomGameImages = [
			'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80', // Mario Kart
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', // Ludo
			'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80', // Uno
			'https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=400&q=80', // Catan
			'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', // Ticket to Ride
			'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', // Banco Imobiliário
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 2
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 3
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 4
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 5
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 6
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 7
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 8
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 9
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 10
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 11
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 12
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 13
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 14
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 15
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 16
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 17
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 18
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 19
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 20
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 21
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 22
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 23
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 24
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 25
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 26
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 27
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 28
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 29
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 30
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 31
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 32
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 33
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 34
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 35
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 36
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 37
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 38
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 39
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 40
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 41
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 42
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 43
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 44
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 45
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 46
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 47
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 48
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 49
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 50
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 51
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 52
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 53
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 54
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 55
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 56
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 57
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 58
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 59
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 60
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 61
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 62
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 63
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 64
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 65
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 66
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 67
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 68
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 69
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 70
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 71
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 72
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 73
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 74
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 75
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80', // Jogos de tabuleiro 76
			'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=400&q=80' // Jog
		];
		const randomImage =
			randomGameImages[Math.floor(Math.random() * randomGameImages.length)];

		const newRoom = {
			nome: form.game,
			nameRoom: form.nameRoom,
			description: form.description,
			imagem: randomImage,
			data: form.date,
			players: 0,
			playersList: []
		};

		const url =
			room && room.id ? API_ENDPOINTS.getRoom(room.id) : API_ENDPOINTS.rooms;

		const method = room && room.id ? 'PUT' : 'POST';

		fetch(url, {
			method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newRoom)
		})
			.then((res) => res.json())
			.then(() => {
				setSuccess(true);
				setTimeout(() => {
					setSuccess(false);
					onCreate();
				}, 1000);
			});
	};

	return (
		<Modal show={show} onHide={onHide} centered style={styles.modal} size="xl">
			<Modal.Header>
				<Modal.Title>Crie sua sala</Modal.Title>
				<i
					className="bi bi-x-lg"
					onClick={onHide}
					style={styles.button}
					aria-label="Fechar modal"
				></i>
			</Modal.Header>
			<Modal.Body>
				{error && <Alert variant="danger">{error}</Alert>}
				{success && <Alert variant="success">Sala criada com sucesso!</Alert>}
				<Form style={styles.form}>
					<Form.Group className="mb-3">
						<Form.Label>Nome do jogo</Form.Label>
						<Form.Control
							type="text"
							placeholder="Digite o nome do jogo"
							name="game"
							value={form.game}
							onChange={handleChange}
							aria-label="Nome do jogo"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Nome da sala</Form.Label>
						<Form.Control
							type="text"
							placeholder="Digite o nome da sala"
							name="nameRoom"
							value={form.nameRoom}
							onChange={handleChange}
							aria-label="Nome da sala"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Data</Form.Label>
						<Form.Control
							type="date"
							name="date"
							value={form.date}
							onChange={handleChange}
							aria-label="Data"
						/>
					</Form.Group>
					<Row>
						<Col md={7}>
							<Form.Group className="mb-3">
								<Form.Label>Descrição da sala</Form.Label>
								<Form.Control
									as="textarea"
									rows={10}
									placeholder="Digite a descrição da sala"
									name="description"
									value={form.description}
									onChange={handleChange}
									aria-label="Descrição da sala"
								/>
							</Form.Group>
						</Col>
						<Col md={5}>
							<Form.Group className="mb-3">
								<Form.Label>Upload Image</Form.Label>
								<Form.Control
									type="file"
									accept="image/*"
									name="image"
									onChange={handleChange}
									aria-label="Upload de imagem"
								/>
							</Form.Group>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="primary"
					onClick={handleSubmit}
					aria-label="Criar sala"
				>
					Criar sala
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

const styles = {
	modal: {
		background: 'rgba(0, 0, 0, 0.5)',
		borderRadius: 8,
		padding: 32
	},
	button: {
		marginLeft: 'auto',
		textDecoration: 'none',
		color: '#000',
		fontSize: 24,
		cursor: 'pointer'
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		paddingLeft: 32,
		paddingRight: 32
	}
};
