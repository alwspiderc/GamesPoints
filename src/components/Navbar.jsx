import {
	Navbar as NavbarBootstrap,
	Container,
	Form,
	InputGroup
} from 'react-bootstrap';
import { Brand } from './Brand';
import { Button } from './Button';
import { ButtonSearch } from './ButtonSearch';

export function Navbar({
	onCreate,
	isSearch = true,
	onSearch,
	searchValue = ''
}) {
	return (
		<NavbarBootstrap bg="light" expand="xl" className="mb-4 p-4" fixed="top">
			<Container fluid>
				<Brand />
				{isSearch && (
					<Form className="d-flex w-100" style={styles.form}>
						<InputGroup>
							<Form.Control
								size="lg"
								type="search"
								placeholder="Procure a sua sala aqui..."
								style={styles.formControl}
								aria-label="Buscar sala"
								value={searchValue}
								onChange={(e) => onSearch(e.target.value)}
							/>
							<ButtonSearch onClick={() => {}} ariaLabel="Buscar" />
						</InputGroup>
					</Form>
				)}
				<Button
					onClick={onCreate}
					ariaLabel={isSearch ? 'Criar Sala' : 'Adicionar Jogador'}
				>
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
		minWidth: 200,
		background: '#f8f9fa',
		maxWidth: '100%'
	}
};
