import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const articleSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	imageUrl: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

export const Article = mongoose.model('Article', articleSchema);
