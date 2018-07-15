import MaterialUIForm from 'material-ui-form';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const StyledMaterialUIForm = styled(MaterialUIForm)`
	&& {
		align-items: baseline;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		> :not(:last-child) {
			margin-right: 10px;
		}

		.swapCurrencies {
			top: 6px;
		}
	}
`;

export const ConversionResultPaper = styled(Paper)`
	&& {
		margin-top: 20px;
		padding: 20px;
		text-align: center;
	}
`;

export const CurrencyMenuItemWrapper = styled.div`
	&& {
		align-items: center;
		display: flex;
		width: 100%;

		> :first-child {
			margin-right: 10px;
		}
	}
`;
