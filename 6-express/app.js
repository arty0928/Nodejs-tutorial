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

app.listen(8080);
