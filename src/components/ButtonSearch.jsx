import { Button as ButtonBootstrap } from 'react-bootstrap';

export function ButtonSearch({ onClick, ariaLabel }) {
	return (
		<ButtonBootstrap
			onClick={onClick}
			style={styles.button}
			aria-label={ariaLabel}
			tabIndex={0}
		>
			<i className="bi bi-search" />
		</ButtonBootstrap>
	);
}

const styles = {
	button: {
		borderRadius: 4,
		backgroundColor: '#FF6767',
		color: '#fff',
		border: 'none'
	}
};
