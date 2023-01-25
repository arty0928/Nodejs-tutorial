const fs = require('fs');

//3
//rename(.....,callback(error,data)) blocking
//try {renameSync(....)} catch(e) {}
//promise.rename().then().catch(0)


//동기적 파일 이름 변경
try{
    fs.renameSync('./text.txt','./text-new.txt');
}
catch(error){
    console.error(error);
}

//비동기적 파일 이름 변경
fs.rename('./text-new.txt', './text.txt', (error) =>{
    console.log(error); //error가 발생하지 않으면 null 출력
});

console.log('hello');

fs.promises
.rename('./text.txt','./text2-new.txt')
.then(()=>console.log('done'))
.catch(console.error);
