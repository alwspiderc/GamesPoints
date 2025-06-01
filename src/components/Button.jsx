import { Button as ButtonBootstrap } from 'react-bootstrap';

export function Button({ children, onClick, ariaLabel, style }) {
	return (
		<ButtonBootstrap
			size="lg"
			style={{ ...styles.button, ...style }}
			onClick={onClick}
			aria-label={ariaLabel}
			tabIndex={0}
		>
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
