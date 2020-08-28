import React from 'react';
import { AUTH_TOKEN } from '../constants';
import { useLazyQuery, gql } from '@apollo/client';
import { useState } from 'react';

const LOGIN = gql`
	query Login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			token
		}
	}
`;

function Login(props) {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const _confirm = async () => {
		const token = data.login.token;
		console.log(token);
		_saveUserData(token);
	};

	const _saveUserData = (token) => {
		localStorage.setItem(AUTH_TOKEN, token);
	};

	const [ login, { loading, error, data } ] = useLazyQuery(LOGIN);

	if (loading) return <p>Loading...</p>;

	if (data && data.login) {
		_confirm();
	}

	return (
		<div>
			<h4>Login</h4>
			<div>
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="username"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="password"
				/>
			</div>
			<div>
				<button
					onClick={() => {
						login({
							variables: {
								username: username,
								password: password
							}
						});
					}}
				>
					Login
				</button>
			</div>
		</div>
	);
}

export default Login;
