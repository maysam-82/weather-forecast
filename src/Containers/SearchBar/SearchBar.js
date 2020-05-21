import React, { useState } from 'react';
import { fetchWeather } from '../../actions/actionCreators';
import { connect } from 'react-redux';

const SearchBar = (props) => {
	const [cityName, setCityName] = useState('');

	const onInputChangedHandler = (event) => {
		setCityName(event.target.value);
	};

	const onFormSubmitHandler = (event) => {
		event.preventDefault();
		props.fetchWeather(cityName);
		setCityName('');
	};
	return (
		<form
			className="input-group mt-2"
			onSubmit={(event) => onFormSubmitHandler(event)}
		>
			<input
				placeholder="Get a five-day forecast in your favorite cities"
				className="form-control"
				onChange={(event) => {
					onInputChangedHandler(event);
				}}
				value={cityName}
			/>
			<span className="input-group-btn">
				<button type="submit" className="btn btn-secondary">
					Submit
				</button>
			</span>
		</form>
	);
};

export default connect(null, { fetchWeather })(SearchBar);
