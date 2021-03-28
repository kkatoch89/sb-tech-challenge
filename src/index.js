import React from 'react';
import ReactDOM from 'react-dom';
import {
	createStore,
	compose,
	applyMiddleware,
	combineReducers,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import trendingGifsReducer from './store/reducers/trendingGifs';

import App from './App';

import reportWebVitals from './reportWebVitals';

let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
	composeEnhancers = compose;
}

const rootReducer = combineReducers({
	// Reducers here
	trendingGifs: trendingGifsReducer,
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
