const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('./db');

app.set('port', process.env.PORT || 3000)

app.use(express.json());

// Public files
app.use(express.static(path.join(__dirname, 'public')));


// Start server
app.listen(app.get('port'), () => {
    console.log(`Server on ${app.get('port')}`)
})