import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Cards from '../components/Cards';
import Modal from 'react-modal';
import * as actions from '../store/actions/index';

const MainStyles = styled.main`
	background-color: var(--background);
	padding: 5rem 0;
	h1 {
		color: var(--background);
		font-family: 'Dela Gothic One', cursive;
	}
`;

const modalStyles = {
	// backgroundColor: 'rgba(2, 2, 2, .5)',
	overlay: {
		backgroundColor: 'rgba(30, 65, 71, 0.8)',
	},
	content: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// height: '100%',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

// Bind modal to your root (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const TrendingGifs = (props) => {
	const { onfetchTrendingGifs, ontoggleModal, gifsData, modal } = props;

	// Fetch trending gifs
	useEffect(() => {
		onfetchTrendingGifs();
	}, [onfetchTrendingGifs, ontoggleModal]);

	return (
		<MainStyles>
			<Modal
				isOpen={modal.open}
				onRequestClose={() => ontoggleModal('', false)}
				shouldCloseOnOverlayClick={true}
				shouldCloseOnEsc={true}
				style={modalStyles}
			>
				<img src={modal.url} alt="" />
			</Modal>
			<Cards gifsData={gifsData} onClickHandler={ontoggleModal} />
		</MainStyles>
	);
};

const mapStateToProps = (state) => {
	return {
		gifsData: state.trendingGifs.data,
		modal: state.trendingGifs.modal,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onfetchTrendingGifs: () => dispatch(actions.fetchTrendingGifs()),
		ontoggleModal: (url, modalState) =>
			dispatch(actions.toggleModal(url, modalState)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingGifs);
