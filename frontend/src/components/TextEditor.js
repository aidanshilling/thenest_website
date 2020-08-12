import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Component } from 'react';

export default class TextEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value) {
		this.setState({ text: value });
	}

	render() {
		return (
			<div>
				<ReactQuill value={this.state.text} onChange={this.handleChange} />
				<div dangerouslySetInnerHTML={{ __html: this.state.text }} />
			</div>
		);
	}
}
