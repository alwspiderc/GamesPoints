import React from 'react';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import { Button } from '../components/Button';

export function CreateRoomModal({ show, onHide, onCreate }) {
	return (
		<Modal show={show} onHide={onHide} centered style={styles.modal} size="xl">
			<Modal.Header>
				<Modal.Title>Crie sua sala</Modal.Title>
				<i className="bi bi-x-lg" onClick={onHide} style={styles.button}></i>
			</Modal.Header>
			<Modal.Body>
				<Form style={styles.form}>
					<Form.Group className="mb-3">
						<Form.Label>Nome do jogo</Form.Label>
						<Form.Control type="text" placeholder="Digite o nome do jogo" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Nome da sala</Form.Label>
						<Form.Control type="text" placeholder="Digite o nome da sala" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Data</Form.Label>
						<Form.Control type="date" />
					</Form.Group>
					<Row>
						<Col md={7}>
							<Form.Group className="mb-3">
								<Form.Label>Descrição da sala</Form.Label>
								<Form.Control
									as="textarea"
									rows={10}
									placeholder="Digite a descrição da sala"
								/>
							</Form.Group>
						</Col>
						<Col md={5}>
							<Form.Group className="mb-3">
								<Form.Label>Upload Image</Form.Label>
								<Form.Control type="file" accept="image/*" />
							</Form.Group>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={onCreate}>
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
