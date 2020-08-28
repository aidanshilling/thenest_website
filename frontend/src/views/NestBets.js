import React from 'react';
import Article from '../components/Article';
import { useQuery, gql } from '@apollo/client';
import '../css/OurTakes.css';

const ARTICLES = gql`
	query Articles {
		articles(category: "bet") {
			name
			_id
			text
			author
			imageUrl
		}
	}
`;

export default function NestBets() {
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
						<Article
							key={article.id}
							time={'Just now'}
							title={article.name}
							author={article.author}
							text={article.text}
							id={article._id}
							url={article.imageUrl}
						/>
					);
				})
			);
		} else {
			return <div>No articles...</div>;
		}
	};

	return (
		<div className="takes-container">
			<h1>Nest Bets</h1>
			{getArticles()}
		</div>
	);
}
