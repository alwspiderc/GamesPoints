import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { ListRooms, Navbar, Title, ConfirmModal } from '../components';
import { CreateRoomModal } from './CreateRoomModal';

export function Home() {
	const navigate = useNavigate();
	const [rooms, setRooms] = useState([]);
	const [showConfirm, setShowConfirm] = useState(false);
	const [roomToDelete, setRoomToDelete] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [roomToEdit, setRoomToEdit] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		fetch('http://localhost:3001/rooms')
			.then((res) => res.json())
			.then((data) => setRooms(data));
	}, []);

	function goToCreateRoom() {
		setRoomToEdit(null);
		setShowModal(true);
	}

	function goToRoom(room) {
		navigate(`/players/${room.id}`, {
			state: {
				room
			}
		});
	}

	function editRoom(room) {
		setRoomToEdit(room);
		setShowModal(true);
	}

	function askDeleteRoom(room) {
		setRoomToDelete(room);
		setShowConfirm(true);
	}

	function deleteRoom() {
		if (!roomToDelete) return;
		fetch(`http://localhost:3001/rooms/${roomToDelete.id}`, {
			method: 'DELETE'
		});
		setRooms(rooms.filter((r) => r.id !== roomToDelete.id));
		setShowConfirm(false);
		setRoomToDelete(null);
	}

	function handleModalClose() {
		setShowModal(false);
		setRoomToEdit(null);
	}

	function handleRoomCreatedOrEdited() {
		setShowModal(false);
		setRoomToEdit(null);
		fetch('http://localhost:3001/rooms')
			.then((res) => res.json())
			.then((data) => setRooms(data));
	}

	const filteredRooms = rooms.filter((room) =>
		room.nome.toLowerCase().includes(searchTerm.toLowerCase())
	);

	if (rooms.length === 0) return <div>Nenhuma sala encontrada...</div>;

	return (
		<Container style={styles.container}>
			<Navbar
				onCreate={goToCreateRoom}
				onSearch={setSearchTerm}
				searchValue={searchTerm}
			/>
			<Container style={styles.containerRooms}>
				<Title>Salas de Jogos</Title>

				<ListRooms
					rooms={filteredRooms}
					goToRoom={goToRoom}
					editRoom={editRoom}
					deleteRoom={askDeleteRoom}
				/>
			</Container>
			<CreateRoomModal
				show={showModal}
				onHide={handleModalClose}
				onCreate={handleRoomCreatedOrEdited}
				room={roomToEdit}
			/>
			<ConfirmModal
				show={showConfirm}
				onHide={() => setShowConfirm(false)}
				onConfirm={deleteRoom}
				title="Confirmar exclusão"
				message={`Tem certeza que deseja deletar a sala "${
					roomToDelete?.nome || roomToDelete?.title
				}"?`}
				confirmLabel="Deletar"
				cancelLabel="Cancelar"
			/>
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
