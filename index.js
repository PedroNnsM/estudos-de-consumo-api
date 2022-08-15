const express = require('express');

const app = express();

app.listen('3000');

app.route('/').get( (req, res) => {
    res.send('Hello World');
} );

app.route('/sobre').get( (req, res) => {
    res.send('Hello World sobre, vai que nao tem nada')
} );