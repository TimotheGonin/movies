import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../../components/MovieCard";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const MovieCards = () => {
	const [moviesData, setMoviesData] = useState([]);
	const [moviesDataLoading, setMoviesDataLoading] = useState(true);
	const API_URL = "https://swapi.dev/api/films";

	useEffect(() => {
		async function fetchMoviesData() {
			try {
				const response = await fetch(API_URL);
				const resultData = await response.json();
				setMoviesData(resultData.results);
				setMoviesDataLoading(false);
			} catch (error) {
				console.log(error);
			}
		}
		fetchMoviesData();
	}, []);

	return moviesDataLoading ? (
		<p>Loading...</p>
	) : (
		<MovieCardsWrapper>
			<h2>Résultat de recherche</h2>
			<MovieCardsCollection>
				{moviesData.map((movie) => (
					<MovieCard
						key={`${movie.id}-${movie.title}`}
						title={movie.title}
					></MovieCard>
				))}
			</MovieCardsCollection>
		</MovieCardsWrapper>
	);
};

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const MovieCardsWrapper = styled.section`
	display: flex;
	flex-direction: column;
`;

const MovieCardsCollection = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

export default MovieCards;
