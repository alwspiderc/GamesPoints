import {
	Navbar as NavbarBootstrap,
	Container,
	Form,
	InputGroup
} from 'react-bootstrap';
import { Brand } from './Brand';
import { Button } from './Button';
import { ButtonSearch } from './ButtonSearch';

export function Navbar({ onCreate }) {
	return (
		<NavbarBootstrap
			bg="light"
			expand="lg"
			className="mb-4"
			style={{ borderRadius: 8, margin: 32 }}
		>
			<Container fluid>
				<Brand />
				<Form
					className="d-flex"
					style={{ flex: 1, marginLeft: 32, marginRight: 32 }}
				>
					<InputGroup>
						<Form.Control
							type="search"
							placeholder="Procure a sua sala aqui..."
							className="me-2"
							aria-label="Search"
							style={{ minWidth: 300, background: '#f8f9fa' }}
						/>
						<ButtonSearch onClick={() => {}} />
					</InputGroup>
				</Form>
				<Button onClick={onCreate}>Criar Sala</Button>
			</Container>
		</NavbarBootstrap>
	);
}
