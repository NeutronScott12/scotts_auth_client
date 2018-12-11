import * as React from 'react';
import { print } from 'graphql';
import axios, { AxiosResponse } from 'axios';

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
	AuthConfirmationMutationArgs,
	RegisterResponse,
	LoginResponse,
	CheckTokenResponse,
	AuthConfirmationResponse,
	ResetPasswordResponse,
	ForgotPasswordResponse,
	ChangePasswordResponse
} from '../../graphql/types';

export type Props = {
	text: string;
	children: (
		data: {
			register: (
				{ username, password, email }: RegisterMutationArgs
			) => Promise<AxiosResponse<RegisterResponse>>;
			login: (
				{ email, password }: LoginMutationArgs
			) => Promise<AxiosResponse<LoginResponse>>;
			checkToken: (
				{ token }: CheckTokenMutationArgs
			) => Promise<AxiosResponse<CheckTokenResponse>>;
			authConfirmation: (
				{ token }: AuthConfirmationMutationArgs
			) => Promise<AxiosResponse<AuthConfirmationResponse>>;
			resetPassword: (
				{ id, password }: ResetPasswordMutationArgs
			) => Promise<AxiosResponse<ResetPasswordResponse>>;
			forgotPassword: (
				{ email }: ForgotPasswordMutationArgs
			) => Promise<AxiosResponse<ForgotPasswordResponse>>;
			changePassword: (
				{ email, newPassword, oldPassword }: ChangePasswordMutationArgs
			) => Promise<AxiosResponse<ChangePasswordResponse>>;
			logout: () => Promise<AxiosResponse<any>>;
		}
	) => JSX.Element | null;
	serverUrl: string;
};

export default class ScottsAuthenticationRenderProp extends React.Component<
	Props
> {
	server_url = this.props.serverUrl;

	register = async ({
		username,
		password,
		email
	}: RegisterMutationArgs): Promise<AxiosResponse<RegisterResponse>> => {
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
		return this.props.children({
			register: this.register,
			login: this.login,
			logout: this.logout,
			authConfirmation: this.authConfirmation,
			changePassword: this.changePassword,
			resetPassword: this.resetPassword,
			forgotPassword: this.forgotPassword,
			checkToken: this.checkToken
		});
	}
}
