import React from 'react';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import { Button } from '../components/Button';

export function CreatePlayerModal({ show, onHide, onCreate }) {
	return (
		<Modal show={show} onHide={onHide} centered style={styles.modal} size="xl">
			<Modal.Header>
				<Modal.Title>Crie seu jogador</Modal.Title>
				<i className="bi bi-x-lg" onClick={onHide} style={styles.button}></i>
			</Modal.Header>
			<Modal.Body>
				<Form style={styles.form}>
					<Form.Group className="mb-3">
						<Form.Label>Nome do jogador</Form.Label>
						<Form.Control type="text" placeholder="Digite o nome do jogador" />
					</Form.Group>

					<Row>
						<Col md={7}>
							<Form.Group className="mb-3">
								<Form.Label>Descrição do jogador</Form.Label>
								<Form.Control
									as="textarea"
									rows={10}
									placeholder="Digite a descrição do jogador"
								/>
							</Form.Group>
						</Col>
						<Col md={5}>
							<Form.Group className="mb-3">
								<Form.Label>Imagem</Form.Label>
								<Form.Control type="file" accept="image/*" />
							</Form.Group>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={onCreate}>
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
