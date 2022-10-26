import React from "react";
import styled from "styled-components";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const MovieCard = () => {
	return (
		<MovieCardContainer>
			<img src="" alt="" />
			<h3>Movie name</h3>
			<MoreInfo>
				<li>
					<p>Année</p>
					<span>2022</span>
				</li>
				<li>
					<p>Durée</p>
					<span>1h30</span>
				</li>
				<li>
					<p>Réalisateur</p>
					<span>Bilbo</span>
				</li>
			</MoreInfo>
		</MovieCardContainer>
	);
};

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const MovieCardContainer = styled.article`
	background-color: grey;
	max-width: 200px;
	max-height: 300px;
`;

const MoreInfo = styled.ul`
	list-style-type: none;
	display: flex;
	justify-content: center;
`;

export default MovieCard;
