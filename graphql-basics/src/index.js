import { GraphQLServer } from 'graphql-yoga'

// Scalar types - String, Boolean, Int, Float, ID


// Type definitions (schema)
const typeDefs = `
    type Query {
        me: User!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
`

// Resolver
const resolvers = {
    Query: {
        me() {
            return {
                id: 'abc123',
                name: 'Moto Sakanosita',
                email: 'moto@example.com',
                age: 43
            }
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})