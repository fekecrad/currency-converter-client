export const setAmount = amount => ({
	type: '@@ui/SET_AMOUNT',
	amount
});

export const setBaseCurrency = currency => ({
	type: '@@ui/SET_BASE_CURRENCY',
	currency
});

export const setDestinationCurrency = currency => ({
	type: '@@ui/SET_DESTINATION_CURRENCY',
	currency
});

export const checkEmptyAmount = () => ({
	type: '@@ui/CHECK_VALID_AMOUNT'
});

export const convert = () => ({
	type: '@@ui/CONVERT'
});
