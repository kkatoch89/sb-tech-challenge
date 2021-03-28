import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardsGridStyles = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
`;

const Cards = (props) => {
	const { gifsData } = props;
	return (
		<CardsGridStyles>
			{gifsData.map((el) => {
				return (
					<Card
						url={el.images.downsized_medium.url}
						key={el.id}
						title={el.title}
					/>
				);
			})}
		</CardsGridStyles>
	);
};

export default Cards;
