import express from 'express'
const app = express();

app.get('/sky/:id', (req, res, next) => {
    //console.log(req.path);
    //console.log(req.headers);
    console.log(req.params.id);
    console.log(req.query.keyword);
    console.log('get');
    res.send('hi!');
});

app.listen(8080);
