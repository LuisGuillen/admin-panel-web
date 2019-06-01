const mongoose = require('mongoose');

const URI = process.env.MONGODB || 'mongodb://localhost/admin-panel-web';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(() => console.log('Mongo connected'))
    .catch(error => console.error(error));

module.exports = mongoose;
