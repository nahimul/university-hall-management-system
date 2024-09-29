import {asyncHandler}from '../utls/asyncHandler.js';
import  {Officers} from '../models/officers.models.js' 
import {APIError} from '../utls/APIError.js';
import {APIResponse} from '../utls/APIResponse.js';
import {uploadCloudinary} from '../utls/cloudinary.js';

const officerRegistration= asyncHandler( async (req,res)=>{
    const {name,possition,id_no,mobile,registration,email,password}=req.body;
    console.log(req.body);
    if( [name,possition,id_no,mobile,registration,email,password].some((field)=>{field?.trim()===""})) {
        throw new APIError(400,"All field is required!");
    }
    const isExist = await Officers.findOne({$or:[{email},{id_no}]});
    if(isExist){
        throw new APIError(409,"User with email or id_no already exist! Try for new one...");
    }

    const imagePath = req.files?.avatar[0]?.path;
    if(!imagePath){
        throw new APIError(400,"Avatar is required and path!");
    }
    const avatar = await uploadCloudinary(imagePath);
    if(!avatar){
        throw new APIError(400,"Avatar is required!");
    }

    const officers= await Officers.create({
        name,
        possition,
        id_no,
        registration,
        mobile,
        email,
        password,
        avatar:avatar?.url || "",
    })
    const createOfficer= await Officers.findById(officers._id).select("-password -registration");
    if(!createOfficer){
        throw new APIError(500,"Somthing is Wrong!");
    }
    return res.status(201).json(new APIResponse(200,createOfficer,"Officer Registared Successfully!"));
});


//login officer
const generateTokens = async (userID)=>{
    try{
  
      const user = await Officers.findById(userID);
      const accessToken= user.generateAccessToken();
      const refreshToken = user.generateRefreshToken();
      user.refreshToken = refreshToken;
      await user.save({validateBeforeSave:false});
      return {accessToken,refreshToken};
    } catch (error) {
     throw new APIError(500, 'Something went wrong! while generating token');
    }
  };
  
  const loginOfficers = asyncHandler(async (req, res) => {
    console.log()
    const { email, password } = req.body;
    if (!email || !password) {
      throw new APIError(400, 'Email and Password is required!');
    }
    const officer = await Officers.findOne({$or: [{email},] });
    if (!officer) {
      throw new APIError(404, 'User not found!');
    }
    const isMatch = await officer.isPasswordCorrect(password);
    if (!isMatch) {
      throw new APIError(400, 'Invalid Password!');
    }
    const {accessToken,refreshToken} = await generateTokens(officer._id);
    const loggedInOfficers = await Officers.findById(officer._id).select("-password -refreshToken");
    console.log(loggedInOfficers);
    const options = {
      httpOnly: true,
      secure:true,
    }
   
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(new APIResponse(200, 
      { user: loggedInOfficers, accessToken, refreshToken }, 
      'Login Success'));
  });
  
  //logout officer
  const logoutOfficers = asyncHandler(async (req, res) => {
      
    await Officers.findByIdAndUpdate(
      req.user._id,
      { 
        $unset: { refreshToken: 1 }
      },
      { new: true }
    );
    const options = {
      httpOnly: true,
      secure:true,
    }
    
    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new APIResponse(200, {}, 'Logout Success'));
  });
  


export {officerRegistration, loginOfficers, logoutOfficers};