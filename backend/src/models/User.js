import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	createdArticles: [ { type: Schema.Types.ObjectId, ref: 'Article' } ]
});

export const User = mongoose.model('User', userSchema);
