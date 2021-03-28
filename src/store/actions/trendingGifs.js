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
		readings: { ...data },
	};
};

// Fetch live data
export const fetchTrendingGifs = () => {
	return (dispatch) => {
		axios
			.get(`trending?api_key=${apiKey}&limit=${fetchLimit}&rating=${ageRating}`)
			.then(({ data }) => {
				console.log(data.data);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
};
