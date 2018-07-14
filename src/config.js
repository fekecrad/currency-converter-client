export const getConfig = () => ({
	currencyConverterApiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8888' : 'https://nxhw21uon9.execute-api.eu-west-1.amazonaws.com/prod/'
});
