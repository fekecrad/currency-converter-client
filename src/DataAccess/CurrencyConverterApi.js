import axios from 'axios';

import { getConfig } from '../config';

const axiosInstance = axios.create({
	baseURL: getConfig().currencyConverterApiUrl
});

export const convert = async (value, from, to) => {
	const response = await axiosInstance.post('convert', JSON.stringify({
		value, from, to
	}));
	return response.data;
};

export const getMetadata = async () => {
	const response = await axiosInstance.get('metadata');
	return response.data;
};
