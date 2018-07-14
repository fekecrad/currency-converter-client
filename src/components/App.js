import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';

import CurrencyConverterContainer from '../Containers/CurrencyConverterContainer';

class App extends Component {
	render() {
		return (
			<AppPaper>
				<CurrencyConverter />
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
		padding: 20px;
	}
`;

export default App;
