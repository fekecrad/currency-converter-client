import { connect } from 'react-redux';

import App from '../Components/App';

const mapStateToProps = ({ conversionData }) => ({
	loading: conversionData.loading,
	error: conversionData.error,
	errorObject: conversionData.errorObject
});

export default connect(
	mapStateToProps
)(App);
