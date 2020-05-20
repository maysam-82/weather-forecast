import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchWeather = (cityName) => async (dispatch) => {
	// You need to get API_KEY from `https://openweathermap.org` and add it to .env file.
	const response = await axios.get(
		`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
	);
	console.log(response.data);
	dispatch({
		type: actionTypes.FETCH_WEATHER,
		payload: response.data,
	});
};
