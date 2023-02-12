const path = require('path');
////계획
//1. 사용자가 원하는 폴더이름을 받아온다.

const fs = require('fs');
const os = require('os');
const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'Pictures_node',folder);

if(!folder || !fs.existsSync(workingDir)){
    console.log('Please enter folder name in Pictures');
    return;
}
//2. 그 폴더 안에 video. captured, duplicate 폴더를 만든다
const videoDir=path.join(workingDir,'video');
const capturedDir=path.join(workingDir,'captured');
const duplicatedDir=path.join(workingDir,'duplicated');

!fs.existsSync(videoDir)&& fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir)&& fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir)&& fs.mkdirSync(duplicatedDir);

//3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4|mov, png|aae, IMG_1234(IMG_E1234)
fs.promises.readdir(workingDir)
.then(processFiles)
.catch(console.log);

function processFiles(files){
    files.forEach((file)=>{
        if(isViedoFile(file)){
            //console.log('video',file);
            move(file, videoDir)
        }else if(isCapturedFile(file)){
            //console.log('captured',file);
            move(file, capturedDir)
        }else if(isDuplicatedFile(files, file)){
            //console.log('duplicated',file);
            move(file, duplicatedDir)
        }
    });
}
function isViedoFile(file){
    const regExp = /(mp4|mov)$/gm;
    const match = file.match(regExp);
    //console.log(match);
    return !!match;
    //return true;
}
function isCapturedFile(file){
    const regExp = /(png|aae)$/gm;
    const match = file.match(regExp);
    //console.log(match);
    return !!match;
    //return true;
}
function isDuplicatedFile(files, file){
    // //IMG_XXXX -> IMG_EXXX가 있는지 검사
    // //IMG로 시작하는지 검사
    if(!file.startsWith('IMG_') || file.startsWith('IMG_E')){
        return false;
    }

    const edited = `IMG_E${file.split('_')[1]}`;
    const found = files.find(f=>f.includes(edited));
    //있다면 true반환
    return !!found;

}

function move(file, targetDir){
    console.log(`move ${file} to ${path.basename(targetDir)}`);
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(targetDir,file);

    fs.promises
    .rename(oldPath, newPath)
    .catch(console.error);
}