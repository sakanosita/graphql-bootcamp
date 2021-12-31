import { GraphQLServer } from 'graphql-yoga'

// Scalar types - String, Boolean, Int, Float, ID

// Type definitions (schema)
const typeDefs = `
    type Query {
        add(numbers: [Float!]!): Float!
        greeting(name: String, position: String): String!
        grades: [Int!]!
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
        add(parent, args, ctx, info) {
            if (args.numbers.length === 0) {
                return 0
            }

            return args.numbers.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            })
        },
        grades(parent, args, ctx, info) {
            return [99, 80, 70, 100]
        },
        greeting(parent, args, ctx, info) {
            console.log(args)

            if (args.name && args.position) {
                return `Hello ${args.name}! You are my favorite ${args.position}`
            }
            return `Hello!!`
        },
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