import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/HelloResolver';

(async () => {
	const app = express();
	app.get('/', (_req, res) => res.send('hello'));

	await createConnection();
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [HelloResolver],
		}),
		context: ({ req, res }) => ({ req, res }),
	});
	apolloServer.applyMiddleware({ app });
	app.listen(4000, () => {
		console.log('express ting started');
	});
})();
