import { Button as ButtonBootstrap } from 'react-bootstrap';

export function ButtonSearch({ onClick }) {
	return (
		<ButtonBootstrap variant="danger" onClick={onClick}>
			<i className="bi bi-search"></i>
		</ButtonBootstrap>
	);
}
