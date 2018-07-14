import React from 'react';
import { Button, NativeSelect, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

import { ConversionResultPaper, StyledMaterialUIForm } from './styles/CurrencyConverter';

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
							value={currency.code}
						>{currency.code}
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
							value={currency.code}
						>{currency.code}
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
			baseAmount &&
				<ConversionResultPaper>
					{baseAmount} {baseCurrency} = <b>{conversionResult}</b> {destinationCurrency}
				</ConversionResultPaper>
		}
	</div>
);

CurrencyConverter.propTypes = {
	amount: PropTypes.string,
	baseAmount: PropTypes.string,
	baseCurrency: PropTypes.string,
	baseCurrencies: PropTypes.arrayOf(PropTypes.shape({
		code: PropTypes.string,
		name: PropTypes.string
	})),
	destinationCurrency: PropTypes.string,
	destinationCurrencies: PropTypes.arrayOf(PropTypes.shape({
		code: PropTypes.string,
		name: PropTypes.string
	})),
	checkEmptyAmount: PropTypes.func,
	convert: PropTypes.func,
	conversionResult: PropTypes.string,
	setAmount: PropTypes.func,
	setBaseCurrency: PropTypes.func,
	setDestinationCurrency: PropTypes.func
};

export default CurrencyConverter;
