import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation Login(
        $email: String!
        $password: String!,
        $tokens: Boolean
    ) {
        login(email: $email, password: $passowrd: tokens: $tokens) {
            ok
            user {
                id
                email
            }
            token
            refreshToken
        }
    }
`;

export const REGISTER = gql`
    mutation Register($email: String!, $password: String!, usernmae: String!) {
        register(email: $email, password: $password, username: $username) {
            ok
            sentEmailMessage
            email
        }
    }
`;

export const CHECK_TOKEN = gql`
	mutation CheckToken($token: String!) {
		checkToken(token: $token) {
			ok
			result
		}
	}
`;

export const AUTH_CONFIRMATION = gql`
	mutation AuthConfirmation($token: String!) {
		authConfirmation(token: $token) {
			ok
			result
		}
	}
`;

export const RESET_PASSWORD = gql`
    mutation ResetPassword($id: ID!, password: String!) {
        resetPassword(id: $id, password: $password) {
            ok
            result
        }
    }
`;

export const FORGOT_PASSWORD = gql`
	mutation ForgotPassword($email: String!) {
		forgotPassword(email: $email) {
			ok
			sentEmailMessage
			email
		}
	}
`;

export const CHANGE_PASSWORD = gql`
    mutation ChangePassword($email: String!, newPassword: String!, oldPassword: String!) {
        changePassword(email: $email, newPassword: $newPassword, oldPassword: $oldPassword) {
            ok
            result
        }
    }
`;

export const LOGOUT = gql`
	mutation Logout {
		logout
	}
`;
