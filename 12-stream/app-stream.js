const fs = require('fs');

const data = [];
const readStream = fs.createReadStream('./file.txt',{
    highWaterMark: 8,//64 kb(default) 읽을 버퍼 크기 정하기
    //encoding: 'utf-8',

}).once('data', chunk => {
    //console.log(chuck);
    data.push(chunk);
}).on('end', ()=>{
    console.log(data.join(''));
}).on('error', error => {
    console.log(error);
});