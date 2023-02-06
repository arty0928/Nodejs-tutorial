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
const method = req.method; //action을 받아옴
if(url === '/courses'){
    if(method === 'GET'){
res.writeHead(200,{'Content-Type':'application/json'});
res.end(JSON.stringify(courses));
    }
}
});

server.listen(8080);
