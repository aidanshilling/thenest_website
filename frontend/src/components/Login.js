// import React, { Component } from 'react';
// import { AUTH_TOKEN } from '../constants';
// import { Mutation } from 'react-apollo';
// import gql from 'graphql-tag';

// const LOGIN_MUTATION = gql`
// 	mutation LoginMutation($email: String!, $password: String!) {
// 		login(email: $email, password: $password) {
// 			token
// 		}
// 	}
// `;

// class Login extends Component {
// 	state = {
// 		email: '',
// 		password: '',
// 		name: ''
// 	};

// 	render() {
// 		const { login, email, password, name } = this.state;
// 		return (
// 			<div>
// 				<h4>Login</h4>
// 				<div>
// 					<input
// 						value={email}
// 						onChange={(e) => this.setState({ email: e.target.value })}
// 						type="text"
// 						placeholder="email"
// 					/>
// 					<input
// 						value={password}
// 						onChange={(e) => this.setState({ password: e.target.value })}
// 						type="password"
// 						placeholder="password"
// 					/>
// 				</div>
// 				<div>
// 					<Mutation
// 						mutation={LOGIN_MUTATION}
// 						variables={{ email, password }}
// 						onComplete={(data) => this._confirm(data)}
// 					>
// 						<div onClick={mutation}>Login</div>
// 					</Mutation>
// 				</div>
// 			</div>
// 		);
// 	}

// 	_confirm = async () => {
// 		const { token } = data.login;
// 		this._saveUserData(token);
// 		this.props.history.push(`/`);
// 	};

// 	_saveUserData = (token) => {
// 		localStorage.setItem(AUTH_TOKEN, token);
// 	};
// }

// export default Login;
