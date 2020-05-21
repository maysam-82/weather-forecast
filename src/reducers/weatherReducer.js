import * as actionTypes from '../actions/actionTypes';
const weatherReducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.FETCH_WEATHER:
			return [action.payload, ...state];

		default:
			return state;
	}
};

export default weatherReducer;
