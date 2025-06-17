import React, { useState, useEffect } from 'react';
import { Modal, Form, Row, Col, Alert } from 'react-bootstrap';
import { Button } from '../components/Button';
import { useLocation } from 'react-router-dom';
import { API_ENDPOINTS } from '../config/api';

export function CreatePlayerModal({ show, onHide, onCreate }) {
	const [form, setForm] = useState({
		name: '',
		description: '',
		image: null
	});
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
	const { room } = useLocation().state;

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: files ? files[0] : value
		}));
	};

	const handleSubmit = () => {
		if (!form.name || !form.description) {
			setError('Por favor, preencha todos os campos obrigatórios.');
			setSuccess(false);
			return;
		}
		setError('');
		setSuccess(true);

		const randomPlayerImages = [
			'https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg',
			'https://images.pexels.com/photos/907156/pexels-photo-907156.jpeg',
			'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
			'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg',
			'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg',
			'https://images.pexels.com/photos/163077/mario-arcade-game-video-163077.jpeg',
			'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
			'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
			'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
			'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
			'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
			'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg',
			'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
			'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
			'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
			'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
			'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg',
			'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
			'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg'
		];
		const randomImage =
			randomPlayerImages[Math.floor(Math.random() * randomPlayerImages.length)];

		const newPlayer = {
			name: form.name,
			description: form.description,
			image: randomImage,
			score: 0
		};

		fetch(API_ENDPOINTS.getRoom(room.id), {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ playersList: [...room.playersList, newPlayer] })
		});
		setSuccess(true);
		setTimeout(() => {
			setSuccess(false);
			onCreate();
		}, 1000);
	};

	useEffect(() => {
		setForm({
			name: '',
			description: '',
			image: null
		});
	}, [show]);

	return (
		<Modal show={show} onHide={onHide} centered style={styles.modal} size="xl">
			<Modal.Header>
				<Modal.Title>Crie jogador</Modal.Title>
				<i
					className="bi bi-x-lg"
					onClick={onHide}
					style={styles.button}
					aria-label="Fechar modal"
				></i>
			</Modal.Header>
			<Modal.Body>
				{error && <Alert variant="danger">{error}</Alert>}
				{success && (
					<Alert variant="success">Jogador criado com sucesso!</Alert>
				)}
				<Form style={styles.form}>
					<Form.Group className="mb-3">
						<Form.Label>Nome do jogador</Form.Label>
						<Form.Control
							type="text"
							placeholder="Digite o nome do jogador"
							name="name"
							value={form.name}
							onChange={handleChange}
							aria-label="Nome do jogador"
						/>
					</Form.Group>
					<Row>
						<Col md={7}>
							<Form.Group className="mb-3">
								<Form.Label>Descrição do jogador</Form.Label>
								<Form.Control
									as="textarea"
									rows={10}
									placeholder="Digite a descrição do jogador"
									name="description"
									value={form.description}
									onChange={handleChange}
									aria-label="Descrição do jogador"
								/>
							</Form.Group>
						</Col>
						<Col md={5}>
							<Form.Group className="mb-3">
								<Form.Label>Imagem</Form.Label>
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
					aria-label="Criar jogador"
				>
					Criar jogador
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
