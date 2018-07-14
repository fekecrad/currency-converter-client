const data = (state = {}, action) => {
	switch (action.type) {
		case '@@data/REQUEST_METADATA':
			return { ...state, loading: true }
		case '@@data/RECIEVE_METADATA':
			return {
				...state,
				...action.metadata,
				loading: false
			}
		case '@data/THROW_ERROR':
			return {
				...state,
				error: true,
				errorObject: action.error,
				loading: false
			}
		default:
			return state;
	}
}

export default data;
