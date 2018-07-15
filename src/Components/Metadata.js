import React from 'react';
import PropTypes from 'prop-types';

import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

const Metadata = ({
	mostPopularDestinationCurrency,
	totalAmount,
	totalRequests,
}) => (
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>Most popular destination currency</TableCell>
				<TableCell numeric>
				{
					mostPopularDestinationCurrency.map((currency, index) => (
						<span key={currency + index}>{currency}{index === mostPopularDestinationCurrency.length - 1 ? '': ', '}</span>
					))
				}
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>Total amount converted</TableCell>
				<TableCell numeric>{totalAmount} USD</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>Total number of conversion requests made</TableCell>
				<TableCell numeric>{totalRequests}</TableCell>
			</TableRow>
		</TableBody>
	</Table>
);

Metadata.propTypes = {
	mostPopularDestinationCurrency: PropTypes.arrayOf(PropTypes.string),
	totalAmount: PropTypes.string,
	totalRequests: PropTypes.number
};

export default Metadata;
