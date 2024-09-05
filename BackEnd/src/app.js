
const express =require( 'express');
const  cors = require( 'cors');
const cookieParser = require('cookie-parser');
//const mongoose = require('mongoose');

const app = express();

// app.use(express.json({limit:'50kb'}));
app.use(express.json());
app.use(express.urlencoded({extended:true,limit:'16kb'}));
app.use(express.static('public'));
app.use(cookieParser());

app.use(cors(
    {
    origin: process.env.CORS_ORIGIN,
    credentials:true,

}
));


//import studentsRouter from './routes/students.routes.js';
const studentsRouter =require( './routes/students.routes.js');
const noticeRouter= require('./routes/notices.routes.js');

//declaration
// app.use("/students", studentsRouter);
app.use("/api/v1/students", studentsRouter);
app.use("/api/v1/notices",noticeRouter);

module.exports= {app};





// import Student from './models/student';
// const OfficersModel = require('./models/officers');
// const NoticeModel= require('./models/notices')


// app.use(cors());

// import connectDB from './db/index.js';

// mongoose.connect('mongodb://127.0.0.1:27017/HallDB');


// app.post('/login',(req,res)=>{
//     const {email,password}=req.body;
//     StudentModel.findOne({email:email})
//     .then(user=>{
//         if(user){
//             if(user.password===password){
//                 res.json("Success");
//             }else{
//                 res.json({message:"Password is incorrect"});
//             }
//         }
//         else{
//             res.json({message:"User not found"});
//         }
//     })
// });

// app.post('/officerslogin',(req,res)=>{
//     const {email,password}=req.body;
//     OfficersModel.findOne({email:email})
//     .then((officers)=>{
//         if(officers){
//             if(officers.password==password){
//                 res.json("Success");
//             } else{
//                 res.json({message:"Password is inncorrect!"});
//             }
//         }
//     })
// });

// app.post('/registration',(req,res)=>{
//     StudentModel.create(req.body)
//     .then((Stedent)=>res.json(Stedent))
//     .catch((err)=>res.json(err)); 
// });

// app.post('/register',(req,res)=>{
//     NoticeModel.create(req.body)
//     .then((Notice)=>res.json(Notice))
//     .catch((err)=>res.json(err));
// });

// app.post('/officersregistration',(req,res)=>{
//     OfficersModel.create(req.body)
//     .then((Officers)=> res.json(Officers))
//     .catch((err)=>res.json(err));
// });
// connectDB().then(()=>{

//     app.listen(3001,(err,res)=>{
//         if(err) throw err;
//         console.log("Server is listening on port 8080");
//     });
// })
// .catch((err)=>{console.log(err)})

// console.log('Hello from the server');
// app.post('/login', (req, res) => {
//   res.send('Login successful');
// });

// const port = process.env.PORT || 8080;
// app.listen(port, (err,res) => {
//   if(err) throw err;
//   console.log(`Listening on port ${port}`);
// });