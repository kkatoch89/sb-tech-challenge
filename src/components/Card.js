import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
	width: 400px;
	position: relative;
	border: 5px solid var(--text);
	border-radius: 5px;
	overflow: hidden;
	h3 {
		margin: 0;
	}
	img {
		width: 100%;
		height: 100%;
	}
	.titleBox {
		height: 100%;
		width: 100%;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		color: var(--white);
		&:hover {
			opacity: 1;
			background-color: rgba(2, 2, 2, 0.4);
			cursor: pointer;
		}
	}
`;

const Card = (props) => {
	return (
		<CardStyles>
			<div className="titleBox" onClick={props.onClickHandler}>
				<h3>{props.title.split('GIF')[0]}</h3>
			</div>
			<img src={props.url} alt={props.title} />
		</CardStyles>
	);
};

export default Card;
