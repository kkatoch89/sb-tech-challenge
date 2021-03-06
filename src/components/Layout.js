import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css';
import styled from 'styled-components';

const LayoutStyles = styled.div`
	background-color: var(--background);
	.wrapper {
		max-width: 1400px;
		min-height: 120vh;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: stretch;
	}
`;

const Layout = ({ children }) => {
	return (
		<LayoutStyles>
			<GlobalStyles />
			<div className="wrapper">{children}</div>
		</LayoutStyles>
	);
};

export default Layout;
