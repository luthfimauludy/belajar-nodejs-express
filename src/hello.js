import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/luthfi', (req, res) => {
    res.send('Hello Luthfi');
});

app.listen(3000, () => {
    console.info("Server started on port 3000");
});