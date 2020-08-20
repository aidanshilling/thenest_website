import { Article } from './models/Article';

export const resolvers = {
	Query: {
		hello: () => 'hello',
		articles: async (_, { category }) => Article.find(category ? { category: category } : null)
	},
	Mutation: {
		createArticle: async (_, { name, text, author, category }) => {
			const article = new Article({ name, text, author, category });
			article.save().then(() => console.log('Article created...'));
			return article;
		}
	}
};
