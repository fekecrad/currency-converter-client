import { connect } from 'react-redux';

import Metadata from '../Components/Metadata';

const mapStateToProps = ({ conversionData }) => ({
	mostPopularDestinationCurrency: conversionData.mostPopularDestinationCurrency,
	totalAmount: Number(conversionData.totalAmount).toFixed(2),
	totalRequests: conversionData.totalRequests
});

export default connect(
	mapStateToProps
)(Metadata);
