const jwt = require('jsonwebtoken');
const secretKey = 'sdfsdf342as';
const token = jwt.sign({
    //payload는 담고싶은 중요한 정보
    id: 'userId',
    isAdmin : true,
},
    //secretKey (랜덤문자열)
    secretKey,
    {expiresIn: 2} //2초 안에 만료
);

console.log(token);

//2초 후에 만료인데, 3초의 setTimeout을 하니 에러남
setTimeout(() => {
    jwt.verify(token, secretKey, (error, decoded) => {
        console.log(error, decoded);
    });
}, 3000);


//한번 발행된 encoded된 token은 변경되면 안됨 