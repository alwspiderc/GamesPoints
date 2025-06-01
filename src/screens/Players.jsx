import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Navbar, Title } from '../components';

export function Players() {
	const navigate = useNavigate();
	const location = useLocation();
	const { state } = location;
	const room = state?.room;
	const players = room?.playersList || [];

	const [scores, setScores] = useState(players.map(() => 10));

	const handleScore = (idx, delta) => {
		setScores((scores) =>
			scores.map((score, i) => (i === idx ? Math.max(0, score + delta) : score))
		);
	};

	if (!room) {
		return <div>Sala não encontrada</div>;
	}

	return (
		<Container style={styles.container}>
			<Navbar
				onCreate={() =>
					navigate('/create-player', {
						state: { backgroundLocation: location, room }
					})
				}
				isSearch={false}
			/>

			<Row style={styles.containerPlayers}>
				<Title>JOGADORES</Title>
				{players.map((player) => (
					<Col key={player.id} className="d-flex flex-column align-items-start">
						<div style={styles.player}>
							<img src={player.image} alt={player.name} style={styles.avatar} />
							<div style={styles.name}>{player.name}</div>

							<div style={styles.scoreControls}>
								<Button
									onClick={() => handleScore(1, +1)}
									style={styles.scoreBtn}
								>
									+
								</Button>
								<span style={styles.score}>{scores[1]}</span>
								<Button
									onClick={() => handleScore(1, -1)}
									style={styles.scoreBtn}
								>
									-
								</Button>
							</div>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
}

const styles = {
	container: {
		minHeight: '100vh',
		padding: 0,
		width: '100%'
	},
	containerPlayers: {
		padding: 0,
		width: '100%',
		backgroundColor: '#fff',
		borderRadius: 8,
		marginTop: 200
	},
	player: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 8
	},
	avatar: {
		width: 200,
		height: 200,
		borderRadius: '50%',
		objectFit: 'cover',
		border: '4px solid #eee'
	},
	name: {
		fontWeight: 700,
		fontSize: 20,
		textAlign: 'left',
		marginTop: 8
	},
	scoreControls: {
		display: 'flex',
		alignItems: 'center',
		gap: 10,
		marginTop: 8
	},
	scoreBtn: {
		width: 48,
		height: 48,
		fontSize: 32,
		borderRadius: 8,
		padding: 0
	},
	score: {
		fontSize: 28,
		fontWeight: 700
	}
};
