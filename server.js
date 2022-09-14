const express = require('express');
const router = require('./router');

const cors = require('./cors');
const morgan = require('./morgan');
const bodyParser = require("body-parser");
const app = express();



const port = process.env.PORT || 7500;

//app.get('/', (req, res) => {
    //res.set('Content-Type', 'text/html');
    //res.send('Bienvenue planetes !!');});
app.use(morgan('combined')); 
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));
        app.use(router); // Requests processing will be defined in the file router
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});