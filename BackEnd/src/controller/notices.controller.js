import {asyncHandler }from '../utls/asyncHandler.js';
import { Notices } from '../models/notices.models.js';
import { APIError } from '../utls/APIError.js';
import { APIResponse } from '../utls/APIResponse.js';


const addNotice = asyncHandler ( async (req,res)=>{
    const {title,description}=req.body;
    console.log(req.body);
    if([title,description].some((field)=> { field?.trim()==='' } )){
        throw new APIError(400,"All fields are required!");
    }
    const notice= await Notices.create({
        title,
        description,
    });
    const createdNotice = Notices.findById(notice._id).select(" -description");
    if(!createdNotice){
        throw new APIError(500,"Somthing is Wrong!");
    }

    return res.status(201).json(
        new APIResponse(200,createdNotice,"Add a notice Successfully!")
    );
} )

export {addNotice};