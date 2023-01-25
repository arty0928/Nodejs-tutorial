//fixed-size chuck of memory
//array of integers, byte of data

const fs = require('fs');
const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

//create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); //초기화x ->fast
buf2[0] = 72;
buf2[1]=105;

buf2.copy(buf3);
console.log(`buf2: ${buf2.toString()}`);
console.log(`buf3: ${buf3.toString()}`);


//concat 버퍼 내용 합침
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());