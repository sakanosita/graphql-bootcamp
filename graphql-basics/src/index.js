import { GraphQLServer } from 'graphql-yoga'

// Scalar types - String, Boolean, Int, Float, ID

// Type definitions (schema)
const typeDefs = `
    type Query {
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
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
            }
        },
        post() {
            return {
                id: 'xyz999',
                title: 'Hello Motoko',
                body: 'Go Motoko',
                published: false
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