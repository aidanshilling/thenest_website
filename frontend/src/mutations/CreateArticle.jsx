import React from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_ARTICLE = gql`
	mutation CreateArticle($name: String!, $text: String!, $author: String!, $category: String!) {
		createArticle(name: $name, text: $text, author: $author, category: $category) {
			name
			text
			author
			category
			id
		}
	}
`;

export default function CreateArticle(props) {
	const [ createArticle, { data } ] = useMutation(CREATE_ARTICLE);

	return (
		<div>
			<button
				onClick={() => {
					createArticle({
						variables: {
							name: props.name,
							text: props.text,
							author: props.author,
							category: props.category
						}
					});
					console.log('Article created!');
				}}
			>
				Submit Article
			</button>
		</div>
	);
}
