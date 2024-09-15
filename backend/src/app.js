import express from 'express';
import  cors from 'cors';
import connectDB from './db.js';
const app = express();
app.use(cors());

// app.use(express.json({limit:'50kb'}));
app.use(express.json());
app.use(express.urlencoded({extended:true,limit:'16kb'}));
app.use(express.static('public'));

import employee from './employee.route.js';

//declaration
app.use("/api/v1/employee", employee);

connectDB()
.then(()=>{

  app.listen(8000, () => {
    console.log('Server is running on port 8000');
  } );
})
.catch((error)=>{
  console.log("Server listening error:", error);
});

export {app};