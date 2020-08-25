import React from 'react';
import Nav from './components/Nav';
import './css/App.css';
import Login from './components/Login';
import { useState } from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AUTH_TOKEN } from './constants';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache()
});

//const authToken = localStorage.getItem(AUTH_TOKEN);

function App() {
	//const [ loggedIn, setloggedIn ] = useState(true);

	return (
		<ApolloProvider client={client}>
			<Nav />
		</ApolloProvider>
	);
}

export default App;
