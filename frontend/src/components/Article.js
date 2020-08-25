import React from 'react';
import '../css/Article.css';
import { Link } from 'react-router-dom';

export default function Article(props) {
	const display_text = props.text.substring(0, 250) + '...';

	return (
		<div className="article-container">
			<div className="article-title">
				<h1>{props.title}</h1>
				<h4>
					{props.author}
					<span className="article-time"> - {props.time}</span>
				</h4>
				<img className="article-image" src={props.url} alt={props.alt} />
			</div>
			<div className="article-text" dangerouslySetInnerHTML={{ __html: display_text }} />
			<div>
				<Link to={`${props.id}`}>
					<a id="article-link">Read more</a>
				</Link>
			</div>
		</div>
	);
}
