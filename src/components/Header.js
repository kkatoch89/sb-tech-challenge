import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
	background-color: var(--text);
	h1 {
		color: var(--background);
		font-family: 'Dela Gothic One', cursive;
	}
`;

const Header = () => {
	return (
		<HeaderStyles>
			<h1>Today's Trending Gifs</h1>
		</HeaderStyles>
	);
};

export default Header;
