import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

const TrendingGifs = (props) => {
	const { onfetchTrendingGifs } = props;

	// Fetch trending gifs
	useEffect(() => {
		onfetchTrendingGifs();
	});

	return (
		<div>
			<h1>HELLO!!!</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		data: state.trendingGifs.data,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onfetchTrendingGifs: () => dispatch(actions.fetchTrendingGifs()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingGifs);
