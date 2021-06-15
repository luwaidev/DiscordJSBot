const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/info', (req, res) => {
    res.send(JSON.stringify({ a:1, b:2, c:3 }));
})

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
