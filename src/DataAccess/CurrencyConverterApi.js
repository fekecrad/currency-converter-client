import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://nxhw21uon9.execute-api.eu-west-1.amazonaws.com/prod/'
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
