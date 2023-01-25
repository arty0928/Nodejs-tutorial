console.log('logging');

console.log('log')//개발
console.info('info')//정보
console.warn('warn');//경보
console.error('err');//에러

console.assert(2===3, 'not same');
console.assert(2==2, 'same');

const student = {name: 'eliie', age:20, company: {name: 'AC'}};
const number = [1,2,3,4];

console.log(student);
console.table(student);
console.table(number);

console.dir(student,{showHidden: true, colors: true, depth: 1});
console.time('for loop')

for(let i=0; i<10; i++){
    i++;
}

function a(){
    console.count('a function');
}
a();
console.countReset('a function');
a();
a();

function f1(){
    f2();
}

function f2(){
    f3();
}
function f3(){
    console.log('f3');
    console.trace();
}
f1();


