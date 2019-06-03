const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Query {
        users: [User]
        cars: [Car]
        parts: [Part]
    }

    type User {
        _id: ID
        first_name: String!
        last_name: String
        age: Int
        active: Int
        type: Int
    }
    
    type Car {
        _id: ID
        make: String!
        model: String!
        year: Int
        milage: Int
        active: Int
        user_id: ID
    }

    type Part {
        _id: ID
        description: String!
        status: Int
        active: Int
        car_id: ID
    }

    type Mutation {
        createUser(input: UserInput): User
        createCar(input: CarInput): Car
        createPart(input: PartInput): Part
    }

    input UserInput {
        first_name: String!
        last_name: String
        age: Int
        type: Int
    }

    input CarInput {
        make: String!
        model: String!
        year: Int
        milage: Int
        user_id: ID
    }

    input PartInput {
        description: String!
        status: Int
        car_id: ID
    }

    schema {
        query: Query
        mutation: Mutation
    }
`);
