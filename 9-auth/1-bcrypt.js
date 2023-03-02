const bcrypt = require('bcrypt');

const password = 'abcd1234';
//길이가 10개인 salt
const hashed = bcrypt.hashSync(password, 15);
console.log(`password: ${password}, hashed: ${hashed}`);
//password: abcd1234, hashed: $2b$10$7pFjTnadG735I1K8FRvgc.g7MMy3D1difbBrCsUBdkku0q/Q7JKOO      
//너무 지나치게 saltround가 크면 계산이 오래걸림 -> 서버에 접속할때마다 계산
//보통 10~12 사용

const result = bcrypt.compareSync('abcd123',hashed);
console.log(result);