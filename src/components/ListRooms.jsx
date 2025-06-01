import { Row, Col } from 'react-bootstrap';

import { Card } from './Card';

export function ListRooms({ rooms, navigate }) {
	return (
		<Row>
			{rooms.map((room, idx) => (
				<Col key={idx} md={4} className="mb-4">
					<Card
						image={room.imagem}
						title={room.nome}
						subtitle={room.subtitle}
						description={room.description}
						data={room.data}
						players={room.players}
						onClick={() => {
							navigate(`/players/${room.id}`, {
								state: {
									room
								}
							});
						}}
					/>
				</Col>
			))}
		</Row>
	);
}
