import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

//copy&paste config from cludinary

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadCloudinary= async (localFilePath)=>{
    try{
        if(!localFilePath) return null;
        const result= await cloudinary.uploader.upload(localFilePath,{resource_type:'auto'});
        console.log("File uploaded",result.url);
        return result;
        
    } catch(error){
        //on upload fail operation removed locally saved temp file
        fs.unlinkSync(localFilePath); 

    }
}

export {uploadCloudinary};

//Copy upload your first Asset

// cloudinary.v2.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/olymic_galg.jpg',
//     { public_id:"olympic_flag"},
// function (err,res){console.log(res);});
