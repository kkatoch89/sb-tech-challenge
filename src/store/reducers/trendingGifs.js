import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	data: ['hello'],
};

const trendingGifsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCHED_GIFS_SUCCESS:
			return state;
		default:
			return state;
	}
};

export default trendingGifsReducer;
