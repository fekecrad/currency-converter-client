import React from 'react';

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
				<TableCell numeric>{Number((totalAmount).toFixed(2))} USD</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>Total number of conversion requests made</TableCell>
				<TableCell numeric>{totalRequests}</TableCell>
			</TableRow>
		</TableBody>
	</Table>
);

export default Metadata;
