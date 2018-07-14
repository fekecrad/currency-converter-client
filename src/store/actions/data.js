import { convert as convert_, getMetadata } from '../../DataAccess/CurrencyConverterApi';

export const requestMetadata = () => ({
	type: '@@data/REQUEST_METADATA'
});

export const recieveMetadata = metadata => ({
	type: '@@data/RECIEVE_METADATA',
	metadata
});

export const requestConvert = () => ({
	type: '@@data/REQUEST_CONVERT'
});

export const recieveConvert = (convertData, baseAmount) => ({
	type: '@@data/RECIEVE_CONVERT',
	convertData,
	baseAmount
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

export const convert = () => {
	return async (dispatch, getState) => {
		dispatch(requestConvert());
		try {
			const state = getState();
			const convertData = await convert_(
				state.ui.amount,
				state.ui.baseCurrency,
				state.ui.destinationCurrency
			);
			return dispatch(recieveConvert(convertData, state.ui.amount));
		} catch (error) {
			return dispatch(throwError(error));
		}
	}
}
