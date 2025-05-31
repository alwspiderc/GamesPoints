import { Navbar as NavbarBootstrap } from 'react-bootstrap';

export function Brand() {
	return (
		<NavbarBootstrap.Brand href="#" style={{ fontWeight: 700, fontSize: 24 }}>
			<span style={{ color: '#E74C3C' }}>Games</span>
			<span style={{ color: '#222' }}>Points</span>
		</NavbarBootstrap.Brand>
	);
}
