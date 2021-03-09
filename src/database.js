const mongoose = require('mongoose');

const URL = 'mongodb://localhost:/clientes';

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err))

module.exports = mongoose;  