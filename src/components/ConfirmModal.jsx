import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from './Button';

export function ConfirmModal({
	show,
	onHide,
	onConfirm,
	title,
	message,
	confirmLabel = 'Confirmar',
	cancelLabel = 'Cancelar'
}) {
	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title>{title || 'Confirmação'}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{message}</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide} aria-label="Cancelar" style={styles.button}>
					{cancelLabel}
				</Button>
				<Button onClick={onConfirm} aria-label="Confirmar">
					{confirmLabel}
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

const styles = {
	button: {
		backgroundColor: '#bcab29',
		color: '#fff'
	}
};
