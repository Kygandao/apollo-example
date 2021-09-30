const { ApolloServer } = require("apollo-server");
const { MongoClient } = require('mongodb');
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
const client = new MongoClient('mongodb://localhost:27017'); 

const app = async () => {
    await client.connect().then(console.log('Mongo Connected')).catch(console.error);
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
};

app();