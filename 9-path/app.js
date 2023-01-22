// 운영체제 별로 path 표기가 다름
// → 운영체제 별로 다른 path 표기법 → path로
const { copyFileSync } = require('fs');
const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// console.log(process.env.PATH);

// process.env.PATH.split(path.delimiter);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));

console.log(path.dirname(__filename));


//extension
console.log(path.extname(__filename)); //.js

//parse
const parsed = path.parse(__filename);
console.log(parsed.root);
console.log(parsed.base);
console.log(parsed.name);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));//true
console.log('isAbsolute?', path.isAbsolute('../'));//false


//normalize
//경로 틀리면 고쳐줌
console.log(path.normalize('./folder///////sub'));

//join
console.log(__dirname + path.sep + 'image'); //운영체제별로 path 표기법이 다르니
console.log(path.join(__dirname,'image'));
