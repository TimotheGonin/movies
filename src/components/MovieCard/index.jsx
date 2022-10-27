import React from "react";
import styled from "styled-components";
import TEMPIMG from "../../assets/logo192.png";
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const MovieCard = ({ title }) => {
	return (
		<MovieCardContainer>
			<img src={TEMPIMG} alt="" />
			<h3>{title}</h3>
			<MoreInfo>More infos</MoreInfo>
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

const MoreInfo = styled.button`
	:hover {
		cursor: pointer;
	}
`;

export default MovieCard;
