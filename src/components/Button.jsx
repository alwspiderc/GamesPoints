import { Button as ButtonBootstrap } from 'react-bootstrap';

export function Button({ children, onClick }) {
	return (
		<ButtonBootstrap size="lg" style={styles.button} onClick={onClick}>
			{children}
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
