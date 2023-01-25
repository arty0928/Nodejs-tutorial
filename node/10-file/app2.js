const fs = require('fs').promises;

//read a file
fs.readFile('./text.txt','utf8') //인코딩을 따로 지정하지 않으면 데이터를 그대로 읽음
.then((data )=> console.log(data))
.catch(console.log);

//writing a file
fs.writeFile('./file.txt','Hello dreamcoders')
.catch(console.error);

//순서가 중요하면 앞의 내용이 완료된 후에 then
fs.appendFile('./file.txt','yo dreamcoders')
.then(()=>{
    //copy
    fs.copyFile('./file.txt','./file2.txt')
    .catch(console.error);

})
.catch(console.error);


//folder
fs.mkdir('sub-folder')
.catch(console.error);

fs.readdir('./')
.then(console.log)
.catch(console.error);
