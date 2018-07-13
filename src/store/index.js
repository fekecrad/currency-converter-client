import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger';
import rootReducer from './reducers';

const initialState = {
	ui: {
		amount: 1,
		baseCurrency: 'CZK',
		destinationCurrency: 'USD',
		loading: false
	}
}

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default createStore(
	rootReducer,
	initialState,
  	applyMiddleware(...middlewares)
)
