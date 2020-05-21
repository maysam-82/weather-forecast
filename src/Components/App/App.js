import React, { Component } from 'react';
import SearchBar from '../../Containers/SearchBar/SearchBar';
import Weather from '../../Containers/Weather/Weather';

class App extends Component {
	render() {
		return (
			<div className="container">
				<SearchBar />
				<Weather />
			</div>
		);
	}
}

export default App;
