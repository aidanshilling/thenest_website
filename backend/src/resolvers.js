import { Article } from './models/Article';
import { User } from './models/User';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

require('dotenv').config();

const jwt = jsonwebtoken;

export const resolvers = {
	Query: {
		hello: () => 'hello',
		articles: async (_, { category }) => Article.find(category ? { category: category } : null),
		users: (parent, args, context) => {
			if (!context.user) {
				throw new Error('Unauthenticated');
			}
			return User.find();
		},
		login: async (_, { username, password }) => {
			const user = await User.findOne({ username: username });
			if (!user) {
				throw new Error('User does not exist!');
			}

			const isEqual = await bcrypt.compare(password, user.password);

			if (!isEqual) {
				throw new Error('Password is incorrect!');
			}
			const token = jwt.sign({ userId: user.id, username: user.username }, process.env.BCRYPT_KEY, {
				expiresIn: '2h'
			});

			return { userId: user.id, token: token, tokenExpiration: 2 };
		}
	},
	Mutation: {
		createArticle: async (parent, { name, text, author, category, imageUrl }, context) => {
			if (!context.user) {
				throw new Error('Unauthenticated');
			}
			const article = new Article({ name, text, author, category, imageUrl, userId: '5f474725f818f123f4f25434' });
			let createdArticle;
			return article
				.save()
				.then((result) => {
					createdArticle = { ...result._doc, _id: result.id };
					return User.findById('5f474725f818f123f4f25434');
				})
				.then((user) => {
					user.createdArticles.push(article);
					return user.save();
				})
				.then(() => {
					console.log('Article created...');
					return createdArticle;
				})
				.catch((err) => {
					console.log(err);
					throw err;
				});
		},
		createUser: async (parent, { username, password }, context) => {
			if (!context.user) {
				throw new Error('Unauthenticated');
			}
			return User.findOne({ username: username })
				.then((user) => {
					if (user) {
						throw new Error('User exists already.');
					}
					return bcrypt.hash(password, 12);
				})
				.then((hashedPassword) => {
					const user = new User({
						username: username,
						password: hashedPassword
					});
					return user.save();
				})
				.then((result) => {
					return { ...result._doc, _id: result.id };
				})
				.catch((err) => {
					throw err;
				});
		}
	}
};
