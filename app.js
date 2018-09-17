const express = require('express');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // res.send('send this');
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/test", (req, res) => {
    res.redirect('https://www.google.com');
    // res.send(req.accepts(['json', 'text']));
});

app.use(express.static("public"));

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});