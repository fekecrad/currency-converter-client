import { connect } from 'react-redux';

import {
	convert,
	checkEmptyAmount,
	setAmount,
	setBaseCurrency,
	setDestinationCurrency,
} from '../Store/actions';
import CurrencyConverter from '../Components/CurrencyConverter';

const mapStateToProps = ({ ui }) => ({
	amount: ui.amount,
	baseCurrency: ui.baseCurrency,
	destinationCurrency: ui.destinationCurrency
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
