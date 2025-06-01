import { Card as CardBootstrap } from 'react-bootstrap';
import { Button } from './Button';

export function Card(props) {
	const {
		image,
		title,
		nameRoom,
		description,
		data,
		players,
		onClick,
		editRoom,
		deleteRoom
	} = props;
	return (
		<CardBootstrap
			style={styles.card}
			onClick={onClick}
			aria-label={`Sala de jogo: ${title}`}
		>
			<CardBootstrap.Img variant="top" src={image} style={styles.image} />
			<CardBootstrap.Body style={styles.cardBody}>
				<CardBootstrap.Title style={styles.title}>{title}</CardBootstrap.Title>
				<CardBootstrap.Text style={styles.nameRoom}>
					{nameRoom}
				</CardBootstrap.Text>
				<CardBootstrap.Text style={styles.description}>
					{description}
				</CardBootstrap.Text>
				<CardBootstrap.Text style={styles.data}>{data}</CardBootstrap.Text>
				<CardBootstrap.Text style={styles.players}>
					{players}
				</CardBootstrap.Text>

				<Button
					onClick={(e) => {
						e.stopPropagation();
						editRoom();
					}}
					ariaLabel="Editar Sala"
				>
					Editar Sala
				</Button>
				<Button
					onClick={(e) => {
						e.stopPropagation();
						deleteRoom();
					}}
					ariaLabel="Deletar Sala"
				>
					Deletar Sala
				</Button>
			</CardBootstrap.Body>
		</CardBootstrap>
	);
}

const styles = {
	card: {
		border: 'none',
		borderRadius: 0,
		overflow: 'hidden',
		cursor: 'pointer',
		marginBottom: 16,
		width: '100%'
	},
	image: {
		height: 200,
		objectFit: 'cover',
		width: '100%'
	},
	cardBody: {
		background: '#e0e0e0',
		display: 'flex',
		flexDirection: 'column',
		gap: 4
	},
	title: {
		fontWeight: 700,
		marginBottom: 0
	},
	nameRoom: {
		color: '#FF6767',
		fontWeight: 500,
		fontSize: 16,
		marginBottom: 0
	},
	description: {
		fontSize: 14,
		marginBottom: 0
	},
	data: {
		fontSize: 14,
		marginBottom: 0
	},
	players: {
		fontSize: 14,
		marginBottom: 0,
		color: '#FF6767'
	}
};
