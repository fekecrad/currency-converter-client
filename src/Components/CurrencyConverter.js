import React from 'react';
import { Button, IconButton, MenuItem, TextField, Select  } from '@material-ui/core';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import PropTypes from 'prop-types';
import 'currency-flags/dist/currency-flags.css';

import {
	CurrencyMenuItemWrapper,
	ConversionResultPaper,
	StyledMaterialUIForm 
} from './styles/CurrencyConverter';

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
	setDestinationCurrency,
	swapCurrencies
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
			<Select
				value={baseCurrency}
				onChange={setBaseCurrency}
				renderValue={value => `${value}`}
			>
				{
					baseCurrencies.map((currency) => (
						<MenuItem key={'base' + currency.code} value={currency.code}>
							<CurrencyMenuItem currency={currency} />
						</MenuItem>
					))
				}
			</Select>
			<IconButton onClick={swapCurrencies} className="swapCurrencies">
				<SwapHorizIcon />
			</IconButton>
			<Select
				value={destinationCurrency}
				onChange={setDestinationCurrency}
				renderValue={value => `${value}`}
			>
				{
					destinationCurrencies.map((currency) => (
						<MenuItem key={'destination' + currency.code} value={currency.code}>
							<CurrencyMenuItem currency={currency} />
						</MenuItem>
					))
				}
			</Select>
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

const CurrencyMenuItem = ({ currency }) => (
	<CurrencyMenuItemWrapper>
		<div className={'currency-flag currency-flag-' + currency.code.toLowerCase()}></div>
		<div>{currency.code} - {currency.name}</div>
	</CurrencyMenuItemWrapper>
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
	setDestinationCurrency: PropTypes.func,
	swapCurrencies: PropTypes.func
};

export default CurrencyConverter;
