import React from 'react';
import MaterialUIForm from 'material-ui-form';
import {
	Button,
	NativeSelect,
	Paper,
	TextField
} from '@material-ui/core';
import styled from 'styled-components';

const CurrencyConverter = ({
	amount,
	baseAmount,
	baseCurrency,
	baseCurrencies,
	destinationCurrency,
	destinationCurrencies,
	checkEmptyAmount,
	convert,
	conversionResult,
	setAmount,
	setBaseCurrency,
	setDestinationCurrency
}) => (
	<div>
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
		{
			conversionResult &&
				<ConversionResultPaper>
					{baseAmount} {baseCurrency} = <b>{Number((conversionResult).toFixed(6))}</b> {destinationCurrency}
				</ConversionResultPaper>
		}
	</div>
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

const ConversionResultPaper = styled(Paper)`
	&& {
		margin-top: 20px;
		padding: 20px;
		text-align: center;
	}
`;

export default CurrencyConverter;
