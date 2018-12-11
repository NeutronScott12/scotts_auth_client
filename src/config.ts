import { AxiosRequestConfig } from 'axios';

export const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json'
	}
};
