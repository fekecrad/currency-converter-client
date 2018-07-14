import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://nxhw21uon9.execute-api.eu-west-1.amazonaws.com/prod/'
});

export const getMetadata = async () => {
	const response = await axiosInstance.get('metadata');
	return response.data;
}
