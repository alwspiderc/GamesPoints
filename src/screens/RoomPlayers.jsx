import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Button, Title, Navbar } from '../components';
import { API_ENDPOINTS } from '../config/api';

export function RoomPlayers() {
	const { id } = useParams();
	const [room, setRoom] = useState(null);
	const [players, setPlayers] = useState([]);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		fetch(API_ENDPOINTS.getRoom(id))
			.then((res) => res.json())
			.then((data) => {
				setRoom(data);
				setPlayers(data.playersList || []);
			});
	}, [id]);

	function goToCreatePlayer() {
		navigate('/create-player', {
			state: { backgroundLocation: location, room }
		});
	}

	const handleScore = (playerId, delta) => {
		setPlayers((prevPlayers) =>
			prevPlayers.map((player) =>
				player.id === playerId
					? { ...player, score: (player.score || 0) + delta }
					: player
			)
		);

		const novoScore =
			(players.find((p) => p.id === playerId)?.score || 0) + delta;

		const updatedPlayersList = players.map((player) =>
			player.id === playerId ? { ...player, score: novoScore } : player
		);

		// Atualizar a sala com a nova lista de jogadores
		fetch(API_ENDPOINTS.getRoom(room.id), {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ playersList: updatedPlayersList })
		});
	};
	if (!room) return <div>A sala não tem jogadores...</div>;

	return (
		<Container style={styles.container}>
			<Navbar onCreate={goToCreatePlayer} isSearch={false} />
			<Title style={styles.title}>{room.nameRoom}</Title>
			<Title style={styles.description}>{room.description}</Title>
			<Row style={styles.playersContainer}>
				{players.map((player) => (
					<Col
						key={player.id}
						md={4}
						sm={6}
						xs={12}
						className="mb-4 d-flex flex-column align-items-center"
					>
						<img src={player.image} alt={player.name} style={styles.avatar} />
						<div style={styles.name}>{player.name}</div>
						<div style={styles.scoreControls}>
							<Button
								onClick={() => handleScore(player.id, +1)}
								style={styles.scoreBtn}
								ariaLabel={`Adicionar ponto para ${player.name}`}
							>
								+
							</Button>
							<span style={styles.score}>{player.score || 0}</span>
							<Button
								onClick={() => handleScore(player.id, -1)}
								style={styles.scoreBtn}
								ariaLabel={`Remover ponto de ${player.name}`}
							>
								-
							</Button>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
}

const styles = {
	container: {
		background: '#fff',
		borderRadius: 8,
		padding: 32,
		minHeight: '80vh',
		width: '100%',
		marginTop: 200
	},
	playersContainer: {
		marginTop: 100
	},
	avatar: {
		width: 120,
		height: 120,
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
	},
	description: {
		fontSize: 20,
		color: '#666'
	},
	title: {
		color: 'var(--primary-color)'
	}
};
