import { getMetadata } from '../../DataAccess/CurrencyConverterApi';

export const requestMetadata = () => ({
	type: '@@data/REQUEST_METADATA'
});

export const recieveMetadata = metadata => ({
	type: '@@data/RECIEVE_METADATA',
	metadata
});

export const throwError = error => ({
	type: '@@data/THROW_ERROR',
	error
});

export const fetchMetadata = () => {
	return async (dispatch) => {
		dispatch(requestMetadata());
		try {
			const metadata = await getMetadata();
			return dispatch(recieveMetadata(metadata));
		} catch (error) {
			return dispatch(throwError(error));
		}
	}
}
