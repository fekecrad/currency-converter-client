import React from 'react';
import PropTypes from 'prop-types';
import { ChasingDots } from 'styled-spinkit';

import CurrencyConverter from '../Containers/CurrencyConverterContainer';
import Metadata from '../Containers/MetadataContainer';
import { AppPaper, ErrorPaper, MetadataPaper, PulseContainer } from './styles/App';

export const App = ({ loading, error, errorObject }) => (
	<AppPaper>
		<CurrencyConverter />
		<MetadataPaper>
			<Metadata />
		</MetadataPaper>
		<PulseContainer loading={loading}>
			<ChasingDots color={'#fff'}/>
		</PulseContainer>
		{
			error &&
				<ErrorPaper>Error: {errorObject.message}</ErrorPaper>
		}
	</AppPaper>
);

App.propTypes = {
	loading: PropTypes.bool,
	error: PropTypes.bool,
	errorObject: PropTypes.shape({
		message: PropTypes.string
	})
};

export default App;
