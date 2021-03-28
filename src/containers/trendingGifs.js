import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Cards from '../components/Cards';

import * as actions from '../store/actions/index';

const TrendingGifs = (props) => {
	const { onfetchTrendingGifs, gifsData } = props;

	// Fetch trending gifs
	useEffect(() => {
		onfetchTrendingGifs();
	}, []);

	return (
		<div>
			<h1>Trending Gifs</h1>
			<Cards gifsData={gifsData} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		gifsData: state.trendingGifs.data,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onfetchTrendingGifs: () => dispatch(actions.fetchTrendingGifs()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingGifs);
