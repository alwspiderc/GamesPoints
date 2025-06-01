import { Card as CardBootstrap } from 'react-bootstrap';

export function Card(props) {
	const { image, title, subtitle, description, data, players, onClick } = props;
	return (
		<CardBootstrap style={styles.card} onClick={onClick}>
			<CardBootstrap.Img variant="top" src={image} style={styles.image} />
			<CardBootstrap.Body style={styles.cardBody}>
				<CardBootstrap.Title style={styles.title}>{title}</CardBootstrap.Title>
				<CardBootstrap.Text style={styles.subtitle}>
					{subtitle}
				</CardBootstrap.Text>
				<CardBootstrap.Text style={styles.description}>
					{description}
				</CardBootstrap.Text>
				<CardBootstrap.Text style={styles.data}>{data}</CardBootstrap.Text>
				<CardBootstrap.Text style={styles.players}>
					{players}
				</CardBootstrap.Text>
			</CardBootstrap.Body>
		</CardBootstrap>
	);
}

const styles = {
	card: {
		border: 'none',
		borderRadius: 0,
		overflow: 'hidden',
		cursor: 'pointer'
	},
	image: {
		height: 200,
		objectFit: 'cover'
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
	subtitle: {
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
