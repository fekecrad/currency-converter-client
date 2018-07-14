import { Paper } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const AppPaper = styled(Paper)`
	&& {
		display: inline-block;
		margin: 20px;
		padding: 20px;
		position: relative;
	}
`;

export const MetadataPaper = styled(Paper)`
	&& {
		margin-top: 20px;
		padding: 20px;
	}
`;

export const ErrorPaper = styled(MetadataPaper)`
	&& {
		color: #f00;
	}
`;

export const PulseContainer = styled.div`
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
