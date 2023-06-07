const express = require('express');
const db = require('./config/connection');
// const routes = require('./routes');

const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth')
const { typeDefs, resolvers } = require('./schemas');

const cwd = process.cwd();

const PORT = process.env.port || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });


  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

    });
  });
}

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);