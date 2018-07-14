import React from 'react';
import MaterialUIForm from 'material-ui-form';
import {
	Button,
	NativeSelect,
	TextField
} from '@material-ui/core';
import styled from 'styled-components';

const CurrencyConverter = ({
	amount,
	baseCurrency,
	baseCurrencies,
	destinationCurrency,
	destinationCurrencies,
	checkEmptyAmount,
	convert,
	setAmount,
	setBaseCurrency,
	setDestinationCurrency
}) => (
	<StyledMaterialUIForm onSubmit={convert}>
		<TextField
			label="Amount"
			value={amount}
			type="number"
			data-validators="isRequired"
			onChange={setAmount}
			onBlur={checkEmptyAmount}
		/>
		<NativeSelect
			value={baseCurrency}
			onChange={setBaseCurrency}
		>
			{
				baseCurrencies.map((currency) => (
					<option
						key={'base-' + currency.code}
						value={currency.code}>{currency.code}
					</option>
				))
			}
		</NativeSelect>
		<NativeSelect
			value={destinationCurrency}
			onChange={setDestinationCurrency}
		>
			{
				destinationCurrencies.map((currency) => (
					<option
						key={'destination-' + currency.code}
						value={currency.code}>{currency.code}
					</option>
				))
			}
		</NativeSelect>
		<Button
			color="primary"
			variant="contained"
			type="submit"
		>Convert</Button>
	</StyledMaterialUIForm>
);

const StyledMaterialUIForm = styled(MaterialUIForm)`
	&& {
		align-items: baseline;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		> :not(:last-child) {
			margin-right: 10px;
		}
	}
`;

export default CurrencyConverter;
