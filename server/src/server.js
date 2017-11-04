import express from 'express';
import bodyParser from 'body-parser';
import {graphiqlExpress, graphqlExpress} from 'graphql-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import GraphQLDefs from './GraphQL';

const typeDefs = GraphQLDefs.schema;

const resolvers = GraphQLDefs.resolvers;

const schema = makeExecutableSchema({typeDefs, resolvers});
const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
