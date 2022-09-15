const express = require('express');
const router = require('./router');
const planetesRouter = require('./index');

const app = express();



const port = process.env.PORT || 7500;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Bienvenue planetes !!');});

 
        app.use('/planetes',planetesRouter);

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
