import React from "react";
import MovieCard from "../../components/MovieCard";

const MovieCards = () => {
	return (
		<section>
			<h2>Résultat de recherche</h2>
			<div>
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
			</div>
		</section>
	);
};

export default MovieCards;
