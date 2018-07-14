import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers';

const initialState = {
	ui: {
		amount: 1,
		baseCurrency: 'CZK',
		destinationCurrency: 'USD',
		loading: false
	},
	data: {
		loading: false,
		error: false,
		errorObject: {},
		conversionResult: null,
		currencies: [],
		mostPopularDestinationCurrency: [],
		totalAmount: 0,
		totalRequests: 0
	}
}

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default createStore(
	rootReducer,
	initialState,
  	applyMiddleware(...middlewares)
)
