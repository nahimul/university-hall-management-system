import {asyncHandler }from '../utls/asyncHandler.js';
import { Events } from '../models/events.models.js';
import { APIError } from '../utls/APIError.js';
import { APIResponse } from '../utls/APIResponse.js';
import { uploadCloudinary } from '../utls/cloudinary.js';


const addEvent = asyncHandler ( async (req,res)=>{
    const {title,date,description}=req.body;
    console.log(req.body);
    if([title,date,description].some((field)=> { field?.trim()==='' } )){
        throw new APIError(400,"All fields are required!");
    }
    const filePath = req.files?.images[0]?.path;
    if(!filePath){
        throw new APIError(400,"Event image is required and path!");
    }
    const image = await uploadCloudinary(filePath);
    if(!image){
        throw new APIError(400,"Event image is required!");
    }
    const event= await Events.create({
        title,
        description,
        date,
        images:image?.url || '',
    });
    const createdNotice = await Events.findById(event._id).select(" -description");
    if(!createdNotice){
        throw new APIError(500,"Somthing is Wrong!");
    }

    return res.status(201).json(
        new APIResponse(200,createdNotice,"Add a Event Successfully!")
    );
} );
//Get All Events
const getEvents = asyncHandler(async (req,res)=>{
    const events = await Events.find();
    if(!events){
        throw new APIError(404,"No Event found!");
    }
    return res.status(200).json(
        new APIResponse(200,events,"All Events" )
    );
}   );

//get Event by Id
const getEventById = asyncHandler(async (req,res)=>{
    const {id}=req.params;
    const event = await Events.findById(id);
    if(!event){
        throw new APIError(404,"No Event found!");
    }
    return res.status(200).json(
        new APIResponse(200,event,"Event" )
    );
}
);

export {addEvent , getEvents, getEventById};