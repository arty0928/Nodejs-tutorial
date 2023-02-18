import express from 'express';

const app = express();

app.use(express.json());

app.route('/posts')
.get('/posts', (req,res) =>{
    res.status(201).send('GET: /posts');
}).post((req,res) => {
    res.status(201).send('POST: /posts');
});

app
.route('/posts/:id')
.put('/posts/:id', (req,res) => {
    res.status(201).send('PUT: /posts/:id');
}).delete((req,res) => {
    res.status(201).send('DELETE: /posts/:id');
});