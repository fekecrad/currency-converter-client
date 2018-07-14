const UserInterfaceReducer = (state = {}, action) => {
	switch (action.type) {
		case '@@ui/CHECK_VALID_AMOUNT':
			if (state.amount === '' || state.amount === '0') {
				return {...state, amount: '1' };
			}
			if (state.amount.charAt(0) === '-') {
				return {...state, amount: state.amount.substr(1) };
			}
			return state;
		case '@@ui/SET_AMOUNT':
			if (action.amount.slice(-1) === 'e') {
				return state;
			}
			return { ...state, amount: action.amount };
		case '@@ui/SET_BASE_CURRENCY':
			return { ...state, baseCurrency: action.currency };
		case '@@ui/SET_DESTINATION_CURRENCY':
			return { ...state, destinationCurrency: action.currency };
		default:
			return state;
	}
};

export default UserInterfaceReducer;
