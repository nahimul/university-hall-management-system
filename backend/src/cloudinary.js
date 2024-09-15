import {v2 as cloudinary} from 'cloudinary';    
import fs from 'fs';

cloudinary.config({
    cloud_name: 'dxdxh0tkv',
    api_key: '967643519319416',
    api_secret: 'RCRgph9HxPjdgtgcgPfOTKM5qpI',
});

const uploadCloudinary=async (localFilePath)=>{ 
    try{
        if(!localFilePath) return null;
        const result= await cloudinary.uploader.upload(localFilePath);
        console.log("File uploaded",result.url);
        return result;
    }

    catch(error){
        console.log("Cloudinary Upload Error",error);
        fs.unlinkSync(localFilePath);
    }
};

export {uploadCloudinary};
