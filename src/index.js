import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    console.log('A new request has arrived to index.js');
    res.send('<h1 style="color: blue">Hi from the server main page!?!</h1>');
});

app.get('/apple', (req, res) => {
    console.log('A new apple request has arrived to index.js');
    res.sendFile('page.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server is up and running at port: ${port}`);
});
