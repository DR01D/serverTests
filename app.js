const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send('send this');
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/test', (req, res, next) => {
    if (req.query.name != 'cat') {
        next();
        return;
    } 
    res.send('it was cat');
});

app.get('/test', (req, res) => {
    // res.send('it was not cat');
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});