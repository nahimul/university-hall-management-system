const express =require('express');
const http=require("http");
const app = express();

const server=http.createServer((req,res)=>{
    res.end('<h1>Hello from the server </h1>');   
    console.log('A request is made');
    // console.log(req);
    // console.log(res);
});
const PORT= process.env.PORT || 3000;
server.listen(PORT,(err,res)=>{
    if(err) throw err;
    console.log("Server is listening on port 8080");
});

// console.log('Hello from the server');
// app.post('/login', (req, res) => {
//   res.send('Login successful');
// });

// const port = process.env.PORT || 8080;
// app.listen(port, (err,res) => {
//   if(err) throw err;
//   console.log(`Listening on port ${port}`);
// });