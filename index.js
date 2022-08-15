const express = require('express');

const app = express();

app.listen('3000');


// Get request

// app.route('/').get( (req, res) => {
//     res.send('Hello World');
// } );

// app.route('/sobre').get( (req, res) => {
//     res.send('Hello World sobre, vai que nao tem nada')
// } );

// Post request

// middleware (funcao que vai ser executada antes de qualquer rota)

 app.use( express.json() );

// app.route('/').post( (req, res) =>  res.send(req.body) );

// put request (PUT é para atualizar)

let author = "Pedro Nunes";

// app.route('/').get((req, res) => res.send(author)
// );

// app.route('/').put((req, res) => {
//     author = req.body.author;
//     res.send(author);
// })

// delete request (DELETE é para deletar)

app.route('/:indentificador').delete((req, res) => {
    res.send(req.params.indentificador)
});