import { connect } from 'react-redux';

import Metadata from '../Components/Metadata';

const mapStateToProps = ({ data }) => ({
	mostPopularDestinationCurrency: data.mostPopularDestinationCurrency,
	totalAmount: data.totalAmount,
	totalRequests: data.totalRequests
});

export default connect(
	mapStateToProps
)(Metadata);
