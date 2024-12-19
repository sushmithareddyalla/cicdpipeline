const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, CI/CD Pipeline!');
});

app.listen(3000, () => {
    console.log('App is running on http://localhost:3000');
});

