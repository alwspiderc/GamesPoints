import { Button as ButtonBootstrap } from 'react-bootstrap';

export function Button({ children, onClick }) {
	return (
		<ButtonBootstrap
			variant="danger"
			style={{ borderRadius: 8, minWidth: 80 }}
			onClick={onClick}
		>
			{children}
		</ButtonBootstrap>
	);
}
