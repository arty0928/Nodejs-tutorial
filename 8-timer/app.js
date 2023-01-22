let num = 1;

//setInterval은 멈추지 않으면 계속 실행
const interval = setInterval(()=>{
    console.log(num++);
},1000);

//clearInterval로 setInterval 중지
setTimeout(()=>{
    console.log('Timeout');
    clearInterval(interval);
},6000)