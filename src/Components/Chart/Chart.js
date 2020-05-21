import React from 'react';
import {
	Sparklines,
	SparklinesLine,
	SparklinesReferenceLine,
} from 'react-sparklines';
import _ from 'lodash';

const getAverage = (data) => {
	return _.round(_.sum(data) / data.length);
};

export default function Chart({ chartData, color, unit }) {
	return (
		<div>
			<Sparklines height={120} width={180} data={chartData}>
				<SparklinesLine color={color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>
				{getAverage(chartData)}
				{unit}
			</div>
		</div>
	);
}
