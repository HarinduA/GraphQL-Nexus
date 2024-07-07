import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import { makeSchema, queryType } from 'nexus';

const Query = queryType({
    definition: (t) =>{
        t.string('greeting', {
            resolve: () => 'Hello World!',
        });
    },
});
const schema = makeSchema({types: {Query} });

const server = new ApolloServer ({schema}); //A class provided by the Apollo Server library to create a GraphQL server.
const {url} = await startStandaloneServer(server, {listen: {port:9000} });
console.log(`Server running at ${url}`);
// This is a code first 