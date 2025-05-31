import React from 'react';
import { Card } from '../components/card';
import { Navbar } from '../components/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const salas = [
	{
		nome: 'Mario',
		subtitulo: 'a batalha final',
		imagem:
			'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80'
	},
	{
		nome: 'Ludo',
		subtitulo: 'a batalha final',
		imagem:
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
	},
	{
		nome: 'Uno',
		subtitulo: 'a batalha final',
		imagem:
			'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80'
	},
	{
		nome: 'Mario',
		subtitulo: 'a batalha final',
		imagem:
			'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
	},
	{
		nome: 'Ludo',
		subtitulo: 'a batalha final',
		imagem:
			'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
	},
	{
		nome: 'Uno',
		subtitulo: 'a batalha final',
		imagem:
			'https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=400&q=80'
	}
];

export function Home() {
	return (
		<div
			style={{
				minHeight: '100vh',
				padding: 0,
				width: '100%'
			}}
		>
			<Navbar onCreate={() => {}} />
			<Container
				style={{
					background: '#fff',
					borderRadius: 8,
					padding: 32,
					minHeight: '80vh'
				}}
			>
				<h3 style={{ fontWeight: 700, marginBottom: 32 }}>SALAS DE JOGOS</h3>
				<Row>
					{salas.map((sala, idx) => (
						<Col key={idx} md={4} className="mb-4">
							<Card
								image={sala.imagem}
								title={sala.nome}
								subtitle={sala.subtitulo}
								onClick={() => {}}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}
