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
	}
`;

export const ConversionResultPaper = styled(Paper)`
	&& {
		margin-top: 20px;
		padding: 20px;
		text-align: center;
	}
`;
