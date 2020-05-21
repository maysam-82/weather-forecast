import React from 'react';
import { connect } from 'react-redux';
import Chart from '../../Components/Chart/Chart';
import './style.css';

const Weather = (props) => {
	const getWeatherData = (weatherData, weatherProperty) => {
		return weatherData.map((item) => item.main[weatherProperty]);
	};

	const renderWeather = () => {
		return props.weather.map(({ city, list }) => {
			const { id, name } = city;
			const temps = getWeatherData(list, 'temp');
			const humidity = getWeatherData(list, 'humidity');
			const pressure = getWeatherData(list, 'pressure');
			return (
				<tr key={id}>
					<td>{name}</td>
					<td>
						<Chart color="red" chartData={temps} unit="K" />
					</td>
					<td>
						<Chart color="blue" chartData={humidity} unit="%" />
					</td>
					<td>
						<Chart color="green" chartData={pressure} unit="hPa" />
					</td>
				</tr>
			);
		});
	};
	return (
		<div>
			<table className="table table-hover mt-2">
				<thead>
					<tr>
						<th>City</th>
						<th>Temp. (K)</th>
						<th>Press. (hPa)</th>
						<th>Hum. (%)</th>
					</tr>
				</thead>
				<tbody>{renderWeather()}</tbody>
			</table>
		</div>
	);
};

const mapStateToProps = ({ weather }) => {
	return {
		weather,
	};
};

export default connect(mapStateToProps)(Weather);
