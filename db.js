const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/admin-panel-web', { useNewUrlParser: true })
    .then(() => console.log('Mongo connected'))
    .catch(error => console.error(error));

module.exports = mongoose;
