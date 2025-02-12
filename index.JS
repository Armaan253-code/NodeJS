const http=require('http');

function dataControl(req,resp){
    resp.write("<h1>Hello, this is Armaan</h1>");
    resp.end();
}

// function test(a){
//     return a*10;
// }

// const test =(a)=>a*10;

http.createServer((req,resp)=>{
    resp.write("<h1>Hello, this is Armaan</h1>");
    resp.end();
}).listen(4500);

