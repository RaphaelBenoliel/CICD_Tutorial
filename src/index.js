import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.use('/css', express.static(`${__dirname}/public/css`));
app.use('/js', express.static(`${__dirname}/public/js`));
app.use('/jpg', express.static(`${__dirname}/public/jpg`));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('A new request has arrived to index');
    res.render('page');
});
app.post('/home', (req, res) => {
    console.log('A new user has login to page');
    res.render('home');
});

app.listen(port, () => {
    console.log(`Server is up and running at port: ${port}`);
});
