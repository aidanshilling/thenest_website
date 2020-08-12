import React from 'react';
import '../css/Article.css';

export default function Article(props) {
	return (
		<div className="article-container">
			<div className="article-title">
				<h1>{props.title}</h1>
				<h4>{props.author}</h4>
			</div>
			<div className="article-text">
				<p>{props.text}</p>
			</div>
		</div>
	);
}
