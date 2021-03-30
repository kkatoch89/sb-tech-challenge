import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	data: [],
	modal: {
		url: '',
		open: false,
	},
};

const trendingGifsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCHED_GIFS_SUCCESS:
			return updateObject(state, { data: action.gifsData.data });
		case actionTypes.TOGGLE_MODAL:
			return updateObject(state, { modal: action.modalUpdate });
		default:
			return state;
	}
};

export default trendingGifsReducer;
