import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CapitalCityPage from './pages/CapitalCityPage';

// import Header from './components/Header';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/capital"
					element={<CapitalCityPage />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
