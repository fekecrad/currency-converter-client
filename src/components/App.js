import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';

import CurrencyConverter from '../Containers/CurrencyConverterContainer';
import Metadata from '../Containers/MetadataContainer';

class App extends Component {
	render() {
		return (
			<AppPaper>
				<CurrencyConverter />
				<MetadataPaper>
					<Metadata />
				</MetadataPaper>
			</AppPaper>
		);
	}
}

const AppPaper = styled(Paper)`
	&& {
		display: inline-block;
		margin: 20px;
		padding: 20px;
	}
`;

const MetadataPaper = styled(Paper)`
	&& {
		margin-top: 20px;
		padding: 20px;
	}
`;

export default App;
