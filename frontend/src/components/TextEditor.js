import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Component } from 'react';
import '../css/TextEditor.css';
import CreateArticle from '../mutations/CreateArticle';

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
			<div className="edit-container">
				<form>
					<input type="text" placeholder="Article title" value={this.state.name} onChange={this.updateName} />
					<input
						type="text"
						placeholder="Article author"
						value={this.state.author}
						onChange={this.updateAuthor}
					/>
					<input type="text" placeholder="Image URL" value={this.state.image} onChange={this.updateImage} />
					<label for="take">Our Takes</label>
					<input id="take" name="cat" type="radio" value="take" onChange={this.updateCategory} />
					<label for="bet">Nest Bets</label>
					<input id="bet" name="cat" type="radio" value="bet" onChange={this.updateCategory} />
					<ReactQuill value={this.state.text} onChange={this.updateText} />
					<div dangerouslySetInnerHTML={{ __html: this.state.text }} />
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
