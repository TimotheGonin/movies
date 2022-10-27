import "./App.css";
import SerchInput from "./components/SearchInput";
import MovieCards from "./containers/MovieCards";
import MovieInfos from "./containers/MovieInfos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<main className="App">
				<h1>Movies</h1>
				<SerchInput />
				<Routes>
					<Route path="/" element={<MovieCards />} />
					<Route path="/movieInfo/:id" element={<MovieInfos />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
