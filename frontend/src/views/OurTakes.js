import React from 'react';
import Article from '../components/Article';
import { useQuery, gql } from '@apollo/client';

const ARTICLES = gql`
	query Articles {
		articles {
			name
			id
			text
			user {
				name
			}
		}
	}
`;

export default function OurTakes() {
	const { loading, error, data } = useQuery(ARTICLES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const getArticles = () => {
		if (data.articles.length > 0) {
			return loading ? (
				<div>Loading data...</div>
			) : (
				data.articles.map((article) => {
					return (
						<Article key={article.id} title={article.name} author={article.user.name} text={article.text} />
					);
				})
			);
		} else {
			return <div>No awards...</div>;
		}
	};

	return <div>{getArticles()}</div>;
}
