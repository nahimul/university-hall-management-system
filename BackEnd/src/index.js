require('dotenv').config({path: './.env'});

//import dotenv from 'dotenv';
//import connectDB from './db/index.js';
const mongoose= require('mongoose');
const {connectDB} = require('./db/index.js')
const  {app} =require( './app.js');


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is listening at port: ${process.env.PORT}`);
        
    })
}). catch ((error)=>{
    console.log('Server listening error: '+ error);
});





