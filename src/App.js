import "./App.css";
import SerchInput from "./components/SearchInput";
import MovieCards from "./containers/MovieCards/MovieCards";

function App() {
	return (
		<main className="App">
			<h1>Movies</h1>
			<SerchInput />
			<MovieCards />
		</main>
	);
}

export default App;
