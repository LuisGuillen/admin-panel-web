const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('./db');

app.set('port', process.env.PORT || 3000)

app.use(express.json());

// Controllers
app.use('/api/users', require('./controllers/users.controller'));
app.use('/api/cars', require('./controllers/cars.controller'));
app.use('/api/parts', require('./controllers/parts.controller'));

// Public files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(app.get('port'), () => {
    console.log(`Server on ${app.get('port')}`)
})