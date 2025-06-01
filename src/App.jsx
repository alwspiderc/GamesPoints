import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, CreateRoomModal, CreatePlayerModal } from './screens';
import { RoomPlayers } from './screens/RoomPlayers';

const styles = {
	/* ... */
};

function App() {
	const location = useLocation();
	const state = location.state;

	return (
		<div style={styles.app}>
			<Routes location={state?.backgroundLocation || location}>
				<Route path="/" element={<Home />} />
				<Route path="/players/:id" element={<RoomPlayers />} />
			</Routes>
			{state?.backgroundLocation && (
				<Routes>
					<Route
						path="/create-room"
						element={
							<CreateRoomModal
								show={true}
								onHide={() => window.history.back()}
							/>
						}
					/>
				</Routes>
			)}
			{state?.backgroundLocation && (
				<Routes>
					<Route
						path="/create-player"
						element={
							<CreatePlayerModal
								show={true}
								onHide={() => window.history.back()}
							/>
						}
					/>
				</Routes>
			)}
		</div>
	);
}

export default App;
