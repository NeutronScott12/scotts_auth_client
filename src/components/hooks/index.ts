import { useState } from 'react';
import { print } from 'graphql';
import axios from 'axios';

import {
	LOGIN,
	REGISTER,
	CHECK_TOKEN,
	AUTH_CONFIRMATION,
	FORGOT_PASSWORD,
	CHANGE_PASSWORD,
	LOGOUT
} from '../../graphqlObjects';
import { axiosConfig } from './../../config';
import {
	RegisterMutationArgs,
	LoginMutationArgs,
	CheckTokenMutationArgs,
	ResetPasswordMutationArgs,
	ForgotPasswordMutationArgs,
	ChangePasswordMutationArgs,
	AuthConfirmationMutationArgs
} from '../../graphql/types';

export default function AuthHook(server_url: string) {
	const [ server_path ] = useState(server_url);

	const register = async ({
		username,
		password,
		email
	}: RegisterMutationArgs) => {
		return await axios.post(
			server_path,
			{
				query: print(REGISTER),
				variables: {
					username,
					password,
					email
				}
			},
			axiosConfig
		);
	};

	const login = async ({ email, password, tokens }: LoginMutationArgs) => {
		return await axios.post(
			server_path,
			{
				query: print(LOGIN),
				variables: {
					email,
					password,
					tokens
				}
			},
			axiosConfig
		);
	};

	const checkToken = async ({ token }: CheckTokenMutationArgs) => {
		return await axios.post(
			server_path,
			{
				query: print(CHECK_TOKEN),
				variables: {
					token
				}
			},
			axiosConfig
		);
	};

	const authConfirmation = async ({
		token
	}: AuthConfirmationMutationArgs) => {
		return await axios.post(
			server_path,
			{
				query: print(AUTH_CONFIRMATION),
				variables: {
					token
				}
			},
			axiosConfig
		);
	};

	const resetPassword = async ({
		id,
		password
	}: ResetPasswordMutationArgs) => {
		return await axios.post(
			server_path,
			{
				query: '',
				variables: {
					id,
					password
				}
			},
			axiosConfig
		);
	};

	const forgotPassword = async ({ email }: ForgotPasswordMutationArgs) => {
		return await axios.post(
			server_path,
			{
				query: print(FORGOT_PASSWORD),
				variables: {
					email
				}
			},
			axiosConfig
		);
	};

	const changePassword = async ({
		email,
		oldPassword,
		newPassword
	}: ChangePasswordMutationArgs) => {
		return await axios.post(
			server_path,
			{
				query: CHANGE_PASSWORD,
				variables: {
					email,
					oldPassword,
					newPassword
				}
			},
			axiosConfig
		);
	};

	const logout = async () => {
		return await axios.post(
			server_path,
			{
				query: LOGOUT,
				variables: {}
			},
			axiosConfig
		);
	};

	return {
		register,
		login,
		logout,
		changePassword,
		resetPassword,
		forgotPassword,
		authConfirmation,
		checkToken
	};
}
