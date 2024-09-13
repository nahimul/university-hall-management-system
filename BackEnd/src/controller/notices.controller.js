import {asyncHandler }from '../utls/asyncHandler.js';
import { Notices } from '../models/notices.models.js';
import { APIError } from '../utls/APIError.js';
import { APIResponse } from '../utls/APIResponse.js';
import { uploadCloudinary } from '../utls/cloudinary.js';


const addNotice = asyncHandler ( async (req,res)=>{
    const {title,description}=req.body;
    console.log(req.body);
    if([title,description].some((field)=> { field?.trim()==='' } )){
        throw new APIError(400,"All fields are required!");
    }
    const filePath = req.files?.upFile[0]?.path;
    if(!filePath){
        throw new APIError(400,"File is required and path!");
    }
    const upFile = await uploadCloudinary(filePath);
    if(!upFile){
        throw new APIError(400,"File is required!");
    }
    const notice= await Notices.create({
        title,
        description,
        upFile:upFile?.url || '',
    });
    const createdNotice = await Notices.findById(notice._id).select(" -description");
    if(!createdNotice){
        throw new APIError(500,"Somthing is Wrong!");
    }

    return res.status(201).json(
        new APIResponse(200,createdNotice,"Add a notice Successfully!")
    );
} );

const getNotice = asyncHandler(async (req,res)=>{
    const notices = await Notices.find().select("-description");
    if(!notices){
        throw new APIError(404,"No notice found!");
    }
    return res.status(200).json(
        new APIResponse(200,notices,"All notices")
    );
}   );

export {addNotice , getNotice};