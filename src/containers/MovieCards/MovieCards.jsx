import React from "react";
// import styled from "styled-components";
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

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

export default MovieCards;
