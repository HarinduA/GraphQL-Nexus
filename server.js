import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';


const typeDefs = `#graphql        #This defines a constant named that holds the schema definition for our GraphQL server
    schema {
        query: Query   #This defines the root schema configuration
    }


    type Query { 
        greeting: String
    }
`;

const resolvers ={ //this will hold functions that provide the actual data for the fields defined in the schema
    Query:{
        greeting: () => 'Hello World',
    },
};

const server = new ApolloServer ({typeDefs, resolvers}); //A class provided by the Apollo Server library to create a GraphQL server.
const {url} = await startStandaloneServer(server, {listen: {port:9000} });
console.log(`Server running at ${url}`);
// THIS IS A SCHEMA FOR MY PROGRAM
// this is schema first code 