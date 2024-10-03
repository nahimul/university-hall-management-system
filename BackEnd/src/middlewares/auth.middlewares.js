import { APIError } from "../utls/APIError.js";
import { asyncHandler } from "../utls/asyncHandler.js";
import { Students } from "../models/students.models.js";
import jwt from 'jsonwebtoken';

export const verifyJWT = asyncHandler(async (req, res, next) => {
    try{
        const token = req.cookies?.accessToken || req.header('Authorization')?.replace("Bearer ","");
        
        if(!token){
            throw new APIError ( 401,"Unauthorized request!");
        }
    
        const decodedToken= jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);

        const user = await Students.findById(decodedToken?._id).select("-password-refreshToken");
    
        if(!user){
            throw new APIError(401, "Invalid Access Token");
        }
    
        req.user=user;
        next();
    }
    catch(err){
        throw new APIError(401,err?.message || "Access token isn't valid!");
    }

});