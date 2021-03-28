import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	data: [],
};

const trendingGifsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCHED_GIFS_SUCCESS:
			// return updateObject(state, { data: action.gifsData });
			return { data: [...action.gifsData.data] };
		default:
			return state;
	}
};

export default trendingGifsReducer;
