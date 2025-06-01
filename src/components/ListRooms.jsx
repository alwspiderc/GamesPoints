import { Row, Col } from 'react-bootstrap';

import { Card } from './Card';

export function ListRooms({ rooms, goToRoom, editRoom, deleteRoom }) {
	return (
		<Row aria-label="Lista de salas de jogos">
			{rooms.map((room, idx) => (
				<Col key={idx} md={4} sm={6} xs={12} className="mb-4">
					<Card
						image={room.imagem}
						title={room.nome}
						nameRoom={room.nameRoom}
						description={room.description}
						data={room.data}
						players={room.playersList.length || 0}
						editRoom={() => editRoom(room)}
						deleteRoom={() => deleteRoom(room)}
						onClick={() => goToRoom(room)}
					/>
				</Col>
			))}
		</Row>
	);
}
