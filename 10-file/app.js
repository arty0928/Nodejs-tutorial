const fs = require('fs');

//3
//rename(.....,callback(error,data)) 비동기
//try {renameSync(....)} catch(e) {}
//promise.rename().then().catch(e)


//동기적 파일 이름 변경
try{
    fs.renameSync('./text.txt','./file-new.txt');
}
catch(error){
    console.error(error);
}

//비동기적 파일 이름 변경
fs.rename('./text-new.txt', './text.txt', (error) =>{
    console.log(error);
});

console.log('hello');

