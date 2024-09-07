import {asyncHandler}from ('../utls/asyncHandler')
import  Officers from ('../models/officers.models.js') 
import {APIError} from ('../utls/APIError.js')
import {APIResponse} from ('../utls/APIResponse.js');
import {uploadCloudinary} from ('../utls/cloudinary.js');
import Officers from ('../models/officers.models.js');

const offiersRegistration= asyncHandler( async (req,res)=>{
    const {name,possition,id_no,mobile,email,password}=req.body;
    if( [name,possition,id_no,mobile,email,password].some((field)=>{field?.trim()===""})) {
        throw new APIError(400,"All field is required!");
    }
    const isExist = await Officers.findOne({$or:[{email},{id_no}]});
    if(isExist){
        throw new APIError(409,"User with email or id_no already exist! Try for new one...");
    }

    const officers= await Officers.create({
        name,
        possition,
        id_no,
        registration,
        mobile,
        email,
        password
    })
    const createOfficer= Officers.findById(officers._id).select("-password -registration");
    if(!createOfficer){
        throw new APIError(500,"Somthing is Wrong!");
    }
    return res.status(201).json(new APIResponse(200,createOfficer,"Officer Registared Successfully!"));
});

export {offiersRegistration};