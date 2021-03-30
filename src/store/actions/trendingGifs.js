import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

/**************************************
	RETREIVE TRENDING GIFS
**************************************/

const apiKey = 'pVHhR2GDqczHctVfFN1cFo13Zdy9nUq4';
const fetchLimit = '25';
const ageRating = 'g';

// Add successfully fetched gifs to state
export const fetchedGifsSuccess = (data) => {
	return {
		type: actionTypes.FETCHED_GIFS_SUCCESS,
		gifsData: { ...data },
	};
};

// Fetch live data
export const fetchTrendingGifs = () => {
	return (dispatch) => {
		axios
			.get(`trending?api_key=${apiKey}&limit=${fetchLimit}&rating=${ageRating}`)
			.then(({ data }) => {
				dispatch(fetchedGifsSuccess(data));
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
};

/**************************************
	MODAL CONTROLS
**************************************/

export const toggleModal = (url, modalState) => {
	return {
		type: actionTypes.TOGGLE_MODAL,
		modalUpdate: { url: url, open: modalState },
	};
};
