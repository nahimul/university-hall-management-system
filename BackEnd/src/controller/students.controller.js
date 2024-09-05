// import { asyncHandler } from "../utls/asyncHandler";

const {asyncHandler}= require('../utls/asyncHandler')
const Students = require('../models/students.models.js') 
const {APIError} = require('../utls/APIError.js')
const {APIResponse} = require('../utls/APIResponse.js');
const {uploadCloudinary} = require('../utls/cloudinary.js');

const registerStudents =  asyncHandler( async (req,res)=>{
    const {name,email,department,roll,mobile,session,password}=req.body;
    if(
        [name,email,department,roll,mobile,session,password].some((field)=>{ field?.trim()===""})
        ){
            throw new APIError(400,"All field is required!!!");
        }
const isExist = await Students.findOne({$or:[{email},{roll},{mobile}]});
    
    if(isExist){
        throw new APIError(409,"User with roll, email or mobile already exist! Try new one..")
    }
    // console.log(req.files.avatar[0]);
    const imagePath=  req.files?.avatar[0]?.path;
    console.log(imagePath);
    if(!imagePath){
        throw new APIError(400,"Avatar is required and path!");
    }

const avater= await uploadCloudinary(imagePath);
    if(!avater){
        throw new APIError(400,"Avatar is required!");
    }
    const student= await Students.creat({
        name,
        avatar:avatar?.url ||"",
        department,
        session,
        roll,
        registration,
        mobile,
        email,
        password,
    })
    const createdStudent= Students.findById(student._id).select(
        "-password -registration"
    );
    
    if(!createdStudent){
        throw new APIError(500,'Somthing is Wrong!');
    }

    return res.status(201).json(
        new APIResponse(200,createdStudent,"User Registared Successfully")
    );
} )

//export {registerStudents};
module.exports= {registerStudents};