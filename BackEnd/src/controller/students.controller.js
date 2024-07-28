// import { asyncHandler } from "../utls/asyncHandler";

const asyncHandler= require('../utls/asyncHandler')

const registerStudents =  asyncHandler( async (req,res)=>{
    const obj= req.body();
   return res.status(200).json({
        message:'Hello Naim!!',
    })
} )

//export {registerStudents};
module.exports= {registerStudents};