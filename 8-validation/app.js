import express from 'express';
import {body, param, validationResult} from 'express-validator';

const app = express();
app.use(express.json());

const validate = (req,res,next)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    //에러가 나는 것 중 첫번째의 msg만 출력
    return res.status(400).json({message: errors.array()[0].msg});
}

app.post(
    '/users', 
        [
        body('name').trim().isLength({min: 2}).withMessage("이름은 두글자 이상!"), 
        body('age').isInt().withMessage('숫자를 입력해'),
        body('email').isEmail().withMessage('이메일을 입력').normalizeEmail(),
        body('job.name').notEmpty(),
        validate    //validate 함수를 넣어주고 에러가 없다면 validate 함수 안에 next()로 이 아래 코드 진행
        ],

    (req,res,next)=>{
    //유효성 검사

    console.log(req.body);
    //이메일이 유효한지 유효성 검사
        // if(req.body.email..){
        //     res.status(400).send({message: 'email wrong'});
        // }else if()..
    
    res.sendStatus(201);
});

app.get('/:email',
    [param('email').isEmail().withMessage('이메일을 입력'),validate],
    (req,res,next)=>{
        res.send('📩');
});

app.listen(5000);