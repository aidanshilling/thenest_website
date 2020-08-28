import React from 'react';
import Nav from './components/Nav';
import './css/App.css';
import Login from './components/Login';
import { useState } from 'react';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { AUTH_TOKEN } from './constants';
import jwtDecode from 'jwt-decode';

function App() {
	const [ loggedIn, setloggedIn ] = useState(false);
	// Create function to validate token

	const token = localStorage.getItem(AUTH_TOKEN);

	const getClient = () => {
		let client;

		const httpLink = createHttpLink({
			uri: 'http://localhost:4000/graphql'
		});

		let authLink = setContext((_, { headers }) => {
			const token = localStorage.getItem(AUTH_TOKEN);
			return {
				headers: {
					...headers,
					Authorization: token ? `Bearer ${token}` : ''
				}
			};
		});

		client = new ApolloClient({
			link: authLink.concat(httpLink),
			cache: new InMemoryCache()
		});

		return client;
	};

	try {
		let exp = jwtDecode(token).exp;
		console.log(exp);
		console.log(Date.now() / 1000);
		if (token && exp < Date.now() / 1000) {
			localStorage.clear();
			if (!loggedIn) {
				setloggedIn(false);
			}
		}
		if (token && !loggedIn) {
			setloggedIn(true);
		}
	} catch (err) {
		localStorage.clear();
		if (loggedIn) {
			setloggedIn(false);
		}
	}

	let client = getClient();

	return (
		<ApolloProvider client={client}>
			<Nav loginState={loggedIn} />
		</ApolloProvider>
	);
}

export default App;
