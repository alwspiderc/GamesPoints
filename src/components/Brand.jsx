import { Navbar as NavbarBootstrap } from 'react-bootstrap';

export function Brand() {
	return (
		<NavbarBootstrap.Brand
			href="#"
			style={styles.brand}
			aria-label="GamesPoints - Página inicial"
		>
			<span style={{ color: '#FF6767' }}>Games</span>
			<span style={{ color: '#222' }}>Points</span>
		</NavbarBootstrap.Brand>
	);
}

const styles = {
	brand: {
		fontWeight: 700,
		fontSize: 30
	}
};
