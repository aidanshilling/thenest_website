import React from 'react';
import '../css/ArticleView.css';

export default function ArticleView(props) {
	return (
		<div className="av-container">
			<h1 className="av-title">{props.title}</h1>

			<h4 className="av-caption">
				{props.author} - {props.time}
			</h4>

			<img className="av-image" src={props.url} alt={props.caption} />
			<div dangerouslySetInnerHTML={{ __html: props.text }} />
		</div>
	);
}
