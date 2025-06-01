import {
	Navbar as NavbarBootstrap,
	Container,
	Form,
	InputGroup
} from 'react-bootstrap';
import { Brand } from './Brand';
import { Button } from './Button';
import { ButtonSearch } from './ButtonSearch';

export function Navbar({ onCreate, isSearch = true }) {
	return (
		<NavbarBootstrap bg="light" expand="xl" className="mb-4 p-4" fixed="top">
			<Container fluid>
				<Brand />
				{isSearch && (
					<Form className="d-flex" style={styles.form}>
						<InputGroup>
							<Form.Control
								size="lg"
								type="search"
								placeholder="Procure a sua sala aqui..."
								style={styles.formControl}
							/>
							<ButtonSearch onClick={() => {}} />
						</InputGroup>
					</Form>
				)}
				<Button onClick={onCreate}>
					{isSearch ? 'Criar Sala' : 'Adicionar Jogador'}
				</Button>
			</Container>
		</NavbarBootstrap>
	);
}

const styles = {
	navbar: {
		paddingBottom: 40
	},
	form: {
		flex: 1,
		marginLeft: 32,
		marginRight: 32
	},
	formControl: {
		minWidth: 300,
		background: '#f8f9fa'
	}
};
