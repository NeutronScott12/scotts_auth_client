import * as React from 'react';
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

export type Props = {
	text: string;
	children: () => {};
	server_url: string;
};

export default class ScottsAuthenticationRenderProp extends React.Component<
	Props
> {
	server_url = this.props.server_url;

	register = async ({ username, password, email }: RegisterMutationArgs) => {
		return await axios.post(
			this.server_url,
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

	login = async ({ email, password, tokens }: LoginMutationArgs) => {
		return await axios.post(
			this.server_url,
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

	checkToken = async ({ token }: CheckTokenMutationArgs) => {
		return await axios.post(
			this.server_url,
			{
				query: print(CHECK_TOKEN),
				variables: {
					token
				}
			},
			axiosConfig
		);
	};

	authConfirmation = async ({ token }: AuthConfirmationMutationArgs) => {
		return await axios.post(
			this.server_url,
			{
				query: print(AUTH_CONFIRMATION),
				variables: {
					token
				}
			},
			axiosConfig
		);
	};

	resetPassword = async ({ id, password }: ResetPasswordMutationArgs) => {
		return await axios.post(
			this.server_url,
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

	forgotPassword = async ({ email }: ForgotPasswordMutationArgs) => {
		return await axios.post(
			this.server_url,
			{
				query: print(FORGOT_PASSWORD),
				variables: {
					email
				}
			},
			axiosConfig
		);
	};

	changePassword = async ({
		email,
		oldPassword,
		newPassword
	}: ChangePasswordMutationArgs) => {
		return await axios.post(
			this.server_url,
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

	logout = async () => {
		return await axios.post(
			this.server_url,
			{
				query: LOGOUT,
				variables: {}
			},
			axiosConfig
		);
	};

	render() {
		return this.props.children();
	}
}
