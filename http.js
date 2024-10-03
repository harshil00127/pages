const http = require('http');

const port = 8000;

const requesthandler = (req,res)=> {
    res.write("<h1> hello world</h1>")
    res.end();
}

const server = http.createServer(requesthandalar);

server.listen(port,(err)=>{
    console.log("server is running");
})