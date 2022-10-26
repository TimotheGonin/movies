import React from "react";
import styled from "styled-components";
import MovieCard from "../../components/MovieCard";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const MovieCards = () => {
	return (
		<section>
			<h2>Résultat de recherche</h2>
			<MovieCardsCollection>
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
			</MovieCardsCollection>
		</section>
	);
};

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const MovieCardsCollection = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 20rem);
	justify-content: space-evenly;
	row-gap: 5.6rem;
	column-gap: 1rem;
`;

export default MovieCards;
