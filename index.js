const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});
app.listen(3000, () => {
    console.log('Application listening on port 3000!');
});