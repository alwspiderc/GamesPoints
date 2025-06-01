import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

import { ListRooms, Navbar, Title } from '../components';

import rooms from '../mock/room.json';

export function Home() {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<Container style={styles.container}>
			<Navbar
				onCreate={() =>
					navigate('/create-room', { state: { backgroundLocation: location } })
				}
			/>
			<Container style={styles.containerRooms}>
				<Title>Salas de Jogos</Title>
				<ListRooms rooms={rooms} navigate={navigate} />
			</Container>
		</Container>
	);
}

const styles = {
	container: {
		minHeight: '100vh',
		marginTop: 200,
		width: '100%'
	},
	containerRooms: {
		background: '#fff',
		borderRadius: 8
	}
};
