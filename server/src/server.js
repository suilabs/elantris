import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import GraphQLDefs from './GraphQL';

const typeDefs = GraphQLDefs.schema;

const resolvers = GraphQLDefs.resolvers;

const schema = makeExecutableSchema({ typeDefs, resolvers });
const canAuth = password => password === '279183pB';

const app = express();


if (process.env.ENV === 'dev') {
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}

app.use(bodyParser.json());
app.post('*', (req, res, next) => {
  const { query, password } = req.body;
  if (query.indexOf('mutation') !== 0 || canAuth(password)) {
    next();
  } else {
    res.sendStatus(403);
  }
});
app.use('/graphql', cors(), graphqlExpress({ schema }));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
