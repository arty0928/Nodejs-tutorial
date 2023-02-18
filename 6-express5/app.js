import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';


const app = express();

// //딱 http://localhost:8080/api
// //이 경로일때만 all이 출력
// app.all('/api', (req,res, next) =>{
//     console.log('all');
//     next();
// })

// //use는 /sky/~뒤에 뭐가 오든 http://localhost:8080/sky/~ 형태면 다 use 출력
// app.use('/sky', (req,res,next)=>{
//     console.log('use');
//     next();
// })


// app.get(
//     '/',
//     (req, res, next)=>{
//     console.log('first');

//     //하나의 response에서 send가 2개면 에러남 -> return 붙여서 이 response 에서 나가게
//     if(true){
//         return res.send('hello');
//     }
//     res.send('hello');
//     },

//     (req,res,next)=>{
//         console.log('first2');
//     }
// );

// app.get('/',(req, res, next)=>{
//     console.log('second');
// });

// app.use((req,res,next)=>{
//     res.status(404).send('not available');
// })


// app.use((error, req, res, next) => {
//     console.error(error);
//     res.status(500).send('sorry, try later');
// });


// app.use(express.json());
// app.post('/', (req,res,next)=>{
// console.log(req.body);
// });

app.use(express.json());

app.get('/file', (req,res)=>{
    fs.readFile('/file1.txt', (err, data) =>{
        if(err){
            res.sendStatus(404);
        }
    });
});

app.get('/file1', (req,res) => {
    try{
        const data = fs.readFileSync('/file1.txt');
        res.send(data);
    }catch(error){
        res.sendStatus(404);
    }
});

//promise
app.get('/file2', (req,res) => {
    fsAsync
    .readFile('/file2.txt')
    .then((data) => res.send(data))
    .catch(error => res.sendStatus(404)); 
});

//비동기적이면서 동기적으로 보이게
app.get('/file2', async  function (req,res) {
    try{
        const data = await fsAsync.readFile('/file2.txt');
        res.send(data);
    }catch(error){
        res.sendStatus(404);
    }
});

app.use((error, req,res, next) =>{
    console.error(error);
    res.status(500).json({message: 'something went wrong'});
});

app.listen(8080);
