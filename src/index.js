const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./database')

const app = express();

//ajustes
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());

// rutas
app.use('/api', require('./rutas/rutas'));

//archivos estaticos 
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function(){
    console.log('Servidor web ' + app.get('port'));
})

  