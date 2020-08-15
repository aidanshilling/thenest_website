import React from 'react';
import Nav from './components/Nav';
import './css/App.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache()
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div>
				<Nav />
			</div>
		</ApolloProvider>
	);
}

export default App;