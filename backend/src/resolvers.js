import { Article } from './models/Article';

export const resolvers = {
	Query: {
		hello: () => 'hello',
		articles: () => Article.find()
	},
	Mutation: {
		createArticle: async (_, { name }) => {
			const article = new Article({ name });
			article.save().then(() => console.log('Article created...'));
			return article;
		}
	}
};
