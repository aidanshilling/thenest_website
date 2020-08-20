import React from 'react';
import '../css/Article.css';
import { Link } from 'react-router-dom';

export default function Article(props) {
	return (
		<div className="article-container">
			<div className="article-title">
				<h1>{props.title}</h1>
				<h4>
					{props.author}
					<span className="article-time"> - {props.time}</span>
				</h4>
			</div>
			<div className="article-text" dangerouslySetInnerHTML={{ __html: props.text }} />
			<div>
				<Link to={`${props.id}`}>
					<a id="article-link">Read more...</a>
				</Link>
			</div>
		</div>
	);
}
