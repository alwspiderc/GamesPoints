import React from 'react';
import { Modal, Button } from 'react-bootstrap';

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
				<Button variant="secondary" onClick={onHide} aria-label="Cancelar">
					{cancelLabel}
				</Button>
				<Button variant="danger" onClick={onConfirm} aria-label="Confirmar">
					{confirmLabel}
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
