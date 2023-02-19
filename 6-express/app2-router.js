import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

//미들웨어임
app.use(express.json()); //REST API, body를 parsing 
app.use(express.urlencoded({extended: false})); //HTML form -> body

const options = {
    dotfiles: 'ignore',
    etag: false,
    index: false,
    maxAge : 'id',
    redirect: false,
    setHeaders: function (res,path,stat){
        res.send('x-timestamp',Date.now());
    },
};

app.use(express.static('public',options));


app.use('/posts', postRouter);
app.use('/users', userRouter);


app.listen(8080);