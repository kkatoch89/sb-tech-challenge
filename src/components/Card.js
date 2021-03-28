import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
	width: 400px;
	height: 400px;
	img {
		width: 100%;
		height: 80%;
		object-fit: cover;
		object-position: contain;
	}
`;

const Card = (props) => {
	return (
		<CardStyles>
			<h3>{props.title.split('GIF')[0]}</h3>
			<img src={props.url} alt={props.title} />
		</CardStyles>
	);
};

export default Card;
