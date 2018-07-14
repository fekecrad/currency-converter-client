import { connect } from 'react-redux';

import Metadata from '../Components/Metadata';

const mapStateToProps = ({ data }) => ({
	mostPopularDestinationCurrency: data.mostPopularDestinationCurrency,
	totalAmount: Number(data.totalAmount).toFixed(2),
	totalRequests: data.totalRequests
});

export default connect(
	mapStateToProps
)(Metadata);
