import React from 'react';

export default function ArticleView(props) {
	return (
		<div>
			<h1>{props.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: props.text }} />
		</div>
	);
}
