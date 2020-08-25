import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import Home from '../views/Home';
import NestBets from '../views/NestBets';
import OurTakes from '../views/OurTakes';
import Podcasts from '../views/Podcasts';
import '../css/Nav.css';
import TextEditor from './TextEditor';
import { useQuery, gql } from '@apollo/client';
import ArticleView from './ArticleView';

const ARTICLES = gql`
	query Articles {
		articles {
			name
			id
			text
			author
			category
			imageUrl
		}
	}
`;

export default function Nav() {
	const { loading, error, data } = useQuery(ARTICLES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const getArticles = () => {
		if (data.articles.length > 0) {
			return loading ? (
				<div>Loading data...</div>
			) : (
				data.articles.map((article) => {
					console.log(article.id, article.category);
					return (
						<Route key={article.id} path={`/${article.id}`}>
							<ArticleView
								title={article.name}
								author={article.author}
								time="Just now"
								url={article.imageUrl}
								text={article.text}
							/>
						</Route>
					);
				})
			);
		} else {
			return <div>No articles...</div>;
		}
	};

	return (
		<Router>
			<div className="nav-container">
				<div className="nav-border">
					<nav id="navbar">
						<div className="nav-row">
							<div className="nav-item">
								<Link className="nav-logo" to="/">
									<img src="thenest.png" alt="Logo" />
								</Link>
							</div>
							<div className="nav-item">
								<Link className="nav-link" to="/our-takes">
									Our Takes
								</Link>
							</div>
							<div className="nav-item">
								<Link className="nav-link" to="/nest-bets">
									Nest Bets
								</Link>
							</div>
							<div className="nav-item">
								<Link className="nav-link" to="/podcasts">
									Podcasts
								</Link>
							</div>
							<div className="nav-item">
								<Link className="nav-link" to="/editor">
									Editor
								</Link>
							</div>
						</div>
					</nav>
				</div>

				<main className="nav-content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/our-takes">
							<OurTakes />
						</Route>
						<Route path="/nest-bets">
							<NestBets />
						</Route>
						<Route path="/podcasts">
							<Podcasts />
						</Route>
						<Route path="/editor">
							<TextEditor />
						</Route>
						{getArticles()}
					</Switch>
				</main>
			</div>
		</Router>
	);
}
