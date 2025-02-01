const http = require('http')
const fs = require('fs')
// creating a server using raw nodejs

const server = http.createServer()

// listener
server.on('request', (req, res)=> {
    if(req.url === '/read-file' && req.method === 'GET');

    // streaming file reading 
    // const readableStream = fs.createReadStream(__dirname + '/texts/read.txt')
    const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt')

    readableStream.on('data', (buffer)=> {
        res.write(buffer)
    })

    readableStream.on('end', ()=>{
        res.end('Hello from meheraz');
    })
})

server.listen(5000, ()=> {
    console.log(`server listening on port 5000`);
})