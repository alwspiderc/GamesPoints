import { Card as CardBootstrap } from 'react-bootstrap';

export function Card({ image, title, subtitle, onClick }) {
	return (
		<CardBootstrap
			style={{ border: 'none', borderRadius: 0, overflow: 'hidden' }}
			onClick={onClick}
		>
			<CardBootstrap.Img
				variant="top"
				src={image}
				style={{ height: 200, objectFit: 'cover' }}
			/>
			<CardBootstrap.Body
				style={{
					background: '#e0e0e0',
					textAlign: 'center',
					padding: 16
				}}
			>
				<CardBootstrap.Title
					style={{
						fontWeight: 700,
						marginBottom: 0
					}}
				>
					{title}
				</CardBootstrap.Title>
				<CardBootstrap.Text
					style={{
						color: '#E74C3C',
						fontWeight: 500,
						fontSize: 16,
						marginBottom: 0
					}}
				>
					{subtitle}
				</CardBootstrap.Text>
			</CardBootstrap.Body>
		</CardBootstrap>
	);
}
