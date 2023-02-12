const http = require('http');

const courses = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JS' },
    { name: 'Node' },
    { name: 'Frontend' },
];

const server = http.createServer((req, res) => {
const url = req.url; //client가 무엇을 원하는지
const method = req.method; //어떤 것을 하고 싶은지 action을 받아옴
if(url === '/courses'){
    if(method === 'GET'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(courses));//course의 object를 json화
    }else if(method === 'POST'){
        const body = [];
        req.on('data',chunk => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end',()=>{
            const bodyStr = Buffer.concat(body).toString();
            const course = JSON.parse(bodyStr);
            courses.push(course);
            console.log(course);
            res.writeHead(201);
            res.end();
        })
    }
}
});

server.listen(8080);
