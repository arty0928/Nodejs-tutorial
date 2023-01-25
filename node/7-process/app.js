const process = require('process');

//console.log(process);

setTimeout(()=>{
    console.log('setTimeout');
},0);

//task queue앞에 다른 프로세스가 있어도
//task queue가장 앞에 올림
//setTimeout보다 먼저 출력
process.nextTick(()=>{
    console.log('nexttick');  
});

for(let i=0; i<100; i++){
    console.log('for loop');
}