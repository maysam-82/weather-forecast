import React from 'react';
import { connect } from 'react-redux';

const Weather = (props) => {
	const renderWeather = () => {
		return props.weather.map((weatherItem) => {
			const { id, name } = weatherItem.city;
			return (
				<tr key={id}>
					<td>{name}</td>
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
						<th>Temp.</th>
						<th>Press.</th>
						<th>Hum.</th>
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
