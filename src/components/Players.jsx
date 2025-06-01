import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button } from './Button';
import { Title } from './Title';

const playerImages = [
	'https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg',
	'https://images.pexels.com/photos/907156/pexels-photo-907156.jpeg',
	'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
	'https://images.pexels.com/photos/163077/mario-arcade-game-video-163077.jpeg',
	'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg',
	'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg'
];

export function Players({ players }) {
	const [scores, setScores] = useState(players.map(() => 10));

	const handleScore = (idx, delta) => {
		setScores((scores) =>
			scores.map((score, i) => (i === idx ? Math.max(0, score + delta) : score))
		);
	};

	return (
		<div style={styles.container}>
			<Title>JOGADORES</Title>
			<Row>
				{players.map((player, idx) => (
					<Col
						key={player.id}
						md={4}
						className="mb-4 d-flex flex-column align-items-center"
					>
						<img
							src={playerImages[idx % playerImages.length]}
							alt={player.name}
							style={styles.avatar}
						/>
						<div style={styles.name}>{player.name}</div>
					</Col>
				))}
			</Row>
			<Row>
				{players.map((player, idx) => (
					<Col
						key={player.id}
						md={4}
						className="mb-4 d-flex flex-column align-items-center"
					>
						<div style={styles.scoreControls}>
							<Button
								onClick={() => handleScore(idx, +1)}
								style={styles.scoreBtn}
							>
								+
							</Button>
							<span style={styles.score}>{scores[idx]}</span>
							<Button
								onClick={() => handleScore(idx, -1)}
								style={styles.scoreBtn}
							>
								-
							</Button>
						</div>
					</Col>
				))}
			</Row>
		</div>
	);
}

const styles = {
	container: {
		background: '#fff',
		borderRadius: 8,
		padding: 32,
		minHeight: '80vh',
		width: '100%'
	},
	avatar: {
		width: 160,
		height: 160,
		borderRadius: '50%',
		objectFit: 'cover',
		marginBottom: 8,
		border: '4px solid #eee'
	},
	name: {
		fontWeight: 700,
		fontSize: 20,
		marginBottom: 16,
		textAlign: 'center'
	},
	scoreControls: {
		display: 'flex',
		alignItems: 'center',
		gap: 16
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
