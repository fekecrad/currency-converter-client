import { connect } from 'react-redux';

import {
	convert,
	checkEmptyAmount,
	setAmount,
	setBaseCurrency,
	setDestinationCurrency,
} from '../Store/actions';
import CurrencyConverter from '../Components/CurrencyConverter';

const mapStateToProps = ({ userInterface, conversionData }) => ({
	amount: userInterface.amount,
	baseAmount: conversionData.baseAmount,
	conversionResult: Number(conversionData.result).toFixed(6),
	baseCurrency: userInterface.baseCurrency,
	destinationCurrency: userInterface.destinationCurrency,
	baseCurrencies: conversionData.currencies.filter((currency) => currency.code !== userInterface.destinationCurrency),
	destinationCurrencies: conversionData.currencies.filter((currency) => currency.code !== userInterface.baseCurrency)
});

const mapDispatchToProps = dispatch => ({
	convert: () => dispatch(convert()),
	checkEmptyAmount: () => dispatch(checkEmptyAmount()),
	setAmount: event => dispatch(setAmount(event.target.value)),
	setBaseCurrency: event => dispatch(setBaseCurrency(event.target.value)),
	setDestinationCurrency: event => dispatch(setDestinationCurrency(event.target.value))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CurrencyConverter);
