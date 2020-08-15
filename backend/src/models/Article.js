import mongoose from 'mongoose';

export const Article = mongoose.model('Article', { name: String });
