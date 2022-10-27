import React, { useState } from "react";
import styled from "styled-components";
import TEMPIMG from "../../assets/logo192.png";
import STARICON from "../../assets/icons/star.svg";
import STARICONFILL from "../../assets/icons/star-fill.svg";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const MovieCard = () => {
	const [liked, SetLiked] = useState(false);
	const favoriteIcon = liked ? STARICONFILL : STARICON;

	return (
		<MovieCardContainer>
			<img src={TEMPIMG} alt="" />
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
			<Favorite>
				<img src={favoriteIcon} alt="" />
			</Favorite>
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

const Favorite = styled.span`
	display: flex;
	justify-content: flex-end;
`;

export default MovieCard;
