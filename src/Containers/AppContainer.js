import { connect } from 'react-redux';

import App from '../Components/App';

const mapStateToProps = ({ data }) => ({
	loading: data.loading,
	error: data.error,
	errorObject: data.errorObject
});

export default connect(
	mapStateToProps
)(App);
