import React, { useState } from 'react';
import { Modal, Form, Row, Col, Alert } from 'react-bootstrap';
import { Button } from '../components/Button';

export function CreateRoomModal({ show, onHide, onCreate }) {
	const [form, setForm] = useState({
		game: '',
		room: '',
		date: '',
		description: '',
		image: null
	});
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: files ? files[0] : value
		}));
	};

	const handleSubmit = () => {
		if (!form.game || !form.room || !form.date || !form.description) {
			setError('Por favor, preencha todos os campos obrigatórios.');
			setSuccess(false);
			return;
		}
		setError('');
		setSuccess(true);
		setTimeout(() => {
			setSuccess(false);
			onCreate(form);
		}, 1000);
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
							name="room"
							value={form.room}
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
