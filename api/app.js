const express = require('express');
const app = express();
const path = require('path');
const graphqlHttp = require('express-graphql');
const graphQlSchema = require('./graphql/schema');
const graphQlResolvers = require('./graphql/resolvers');
require('dotenv').config();
require('./db');

app.set('port', process.env.PORT || 3000)

app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Controllers
app.use('/api/users', require('./controllers/users.controller'));
app.use('/api/cars', require('./controllers/cars.controller'));
app.use('/api/parts', require('./controllers/parts.controller'));

// gql route
app.use('/graphql', graphqlHttp({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true
    })
);

// Public files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(app.get('port'), () => {
    console.log(`Server on ${app.get('port')}`)
})