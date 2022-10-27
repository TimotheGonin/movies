import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TEMPIMG from "../../assets/logo192.png";
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const MovieCard = ({ title, link }) => {
	return (
		<MovieCardContainer>
			<img src={TEMPIMG} alt="" />
			<h3>{title}</h3>
			<Link to={link}>
				<MoreInfo>More infos</MoreInfo>
			</Link>
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
