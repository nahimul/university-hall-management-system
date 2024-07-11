const express =require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const StudentModel = require('./models/student');

const http=require("http");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Student');

// const server=http.createServer((req,res)=>{
//     res.end('<h1>Hello from the server </h1>');   
//     console.log('A request is made');
//     // console.log(req);
//     // console.log(res);
// });
// const PORT= process.env.PORT || 3000;

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    StudentModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success");
            }else{
                res.json({message:"Password is incorrect"});
            }
        }
        else{
            res.json({message:"User not found"});
        }
    })
});

app.post('/register',(req,res)=>{
    StudentModel.create(req.body)
    .then((Stedent)=>res.json(Stedent))
    .catch((err)=>res.json(err)); 
});

app.listen(3001,(err,res)=>{
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