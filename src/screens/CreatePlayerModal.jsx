import React, { useState } from 'react';
import { Modal, Form, Row, Col, Alert } from 'react-bootstrap';
import { Button } from '../components/Button';

export function CreatePlayerModal({ show, onHide, onCreate }) {
	const [form, setForm] = useState({
		name: '',
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
		if (!form.name || !form.description) {
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
				<Modal.Title>Crie seu jogador</Modal.Title>
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
