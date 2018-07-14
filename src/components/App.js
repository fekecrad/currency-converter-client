import React from 'react';
import { Paper } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { ChasingDots } from 'styled-spinkit';


import CurrencyConverter from '../Containers/CurrencyConverterContainer';
import Metadata from '../Containers/MetadataContainer';

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

const AppPaper = styled(Paper)`
	&& {
		display: inline-block;
		margin: 20px;
		padding: 20px;
		position: relative;
	}
`;

const MetadataPaper = styled(Paper)`
	&& {
		margin-top: 20px;
		padding: 20px;
	}
`;

const ErrorPaper = styled(MetadataPaper)`
	&& {
		color: #f00;
	}
`;

const PulseContainer = styled.div`
	&& {
		align-items: center;
		background: rgba(0, 0, 0, 0.3);
		display: none;
		height: 100%;
		justify-content: center;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;

		${props => props.loading === true && css`
			display: flex;
		`}
	}
`;

export default App;
