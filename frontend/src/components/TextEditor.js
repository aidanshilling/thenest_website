import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Component } from 'react';
import '../css/TextEditor.css';
import CreateArticle from '../mutations/CreateArticle';
import ArticleView from './ArticleView';

export default class TextEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			name: '',
			author: '',
			category: '',
			image: ''
		};
		this.updateText = this.updateText.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updateAuthor = this.updateAuthor.bind(this);
		this.updateImage = this.updateImage.bind(this);
		this.updateCategory = this.updateCategory.bind(this);
	}

	updateText(value) {
		this.setState({ text: value });
	}

	updateName(e) {
		this.setState({ name: e.target.value });
	}

	updateAuthor(e) {
		this.setState({ author: e.target.value });
	}

	updateImage(e) {
		this.setState({ image: e.target.value });
	}

	updateCategory(e) {
		this.setState({ category: e.target.value });
	}

	render() {
		return (
			<div>
				<form className="edit-container">
					<h4 className="edit-title">Article Info</h4>
					<input
						className="edit-input"
						type="text"
						placeholder="Article title"
						value={this.state.name}
						onChange={this.updateName}
					/>
					<input
						className="edit-input"
						type="text"
						placeholder="Article author"
						value={this.state.author}
						onChange={this.updateAuthor}
					/>
					<input
						className="edit-input"
						type="text"
						placeholder="Image URL"
						value={this.state.image}
						onChange={this.updateImage}
					/>

					<div>
						<h4 className="edit-title">Category</h4>
						<label for="take">Our Takes</label>
						<input
							className="edit-radio"
							id="take"
							name="cat"
							type="radio"
							value="take"
							onChange={this.updateCategory}
						/>
						<label for="bet">Nest Bets</label>
						<input
							className="edit-radio"
							id="bet"
							name="cat"
							type="radio"
							value="bet"
							onChange={this.updateCategory}
						/>
					</div>

					<ReactQuill value={this.state.text} onChange={this.updateText} />
					<h4 className="edit-title">Preview</h4>
					<ArticleView
						title={this.state.name}
						author={this.state.author}
						text={this.state.text}
						url={this.state.image}
						time="Just now"
					/>
					<CreateArticle
						name={this.state.name}
						author={this.state.author}
						text={this.state.text}
						category={this.state.category}
						imageUrl={this.state.image}
					/>
				</form>
			</div>
		);
	}
}
