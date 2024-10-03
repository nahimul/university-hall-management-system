import { asyncHandler } from '../utls/asyncHandler.js';
import { Students } from '../models/students.models.js';
import { APIError } from '../utls/APIError.js';
import { APIResponse } from '../utls/APIResponse.js';
import { uploadCloudinary } from '../utls/cloudinary.js';

import {Application} from '../models/application.model.js';
import {Complain} from '../models/complainbox.models.js';

//register student
const registerStudents = asyncHandler(async (req, res) => {
  
  const { name, email,registration, department, roll, mobile, session, password } = req.body;
  if (
    [name, email, department,registration, roll, mobile, session, password].some(field => {
      field?.trim() === '';
    })
  ) {
    throw new APIError(400, 'All field is required!!!');
  }
  const isExist = await Students.findOne({
    $or: [{ email }, { roll }, { mobile }],
  });
  
  if (isExist) {
    throw new APIError(
      409,
      'User with roll, email or mobile already exist! Try new one..'
    );
  }
  console.log('registration: ', req.body, 'Files: ',req.files);
  const imagePath = req.files?.avatar[0]?.path;
  if (!imagePath) {
    throw new APIError(400, 'Avatar is required and path!');
  }

  const avatar = await uploadCloudinary(imagePath);
  if (!avatar) {
    throw new APIError(400, 'Avatar is required!');
  }
  const student = await Students.create ({
    name,
    avatar: avatar?.url || '',
    department,
    session,
    roll,
    registration,
    mobile,
    email,
    password,
  });
  const createdStudent = await Students.findById(student._id).select(
    '-password -registration'
  );

  if (!createdStudent) {
    throw new APIError(500, 'Somthing is Wrong!');
  }

  return res
    .status(201)
    .json(new APIResponse(200, createdStudent, 'User Registared Successfully'));
});

//login student
const generateTokens = async (userID)=>{
  try{

    const user = await Students.findById(userID);
    const accessToken= user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({validateBeforeSave:false});
    return {accessToken,refreshToken};
  } catch (error) {
   throw new APIError(500, 'Something went wrong! while generating token');
  }
};

const loginStudent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new APIError(400, 'Email and Password is required!');
  }
  const student = await Students.findOne({$or: [{email},] });
  if (!student) {
    throw new APIError(404, 'User not found!');
  }
  const isMatch = await student.isPasswordCorrect(password);
  if (!isMatch) {
    throw new APIError(400, 'Invalid Password!');
  }
  const {accessToken,refreshToken} = await generateTokens(student._id);
  const loggedInStudent = await Students.findById(student._id).select("-password -refreshToken");
  console.log(loggedInStudent);
  const options = {
    httpOnly: true,
    secure:true,
    maxAge:10*1000,
  }
 
  return res
  .status(200)
  .cookie("accessToken",accessToken,options)
  .cookie("refreshToken",refreshToken,options)
  .json(new APIResponse(200, 
    { user: loggedInStudent, accessToken, refreshToken }, 
    'Login Success'));
});

// get student profile
const getProfile = asyncHandler(async (req, res) => {
  console.log(req.user);
  const student = await Students.findById(req.user._id).select('-password');
  if (!student) {
    throw new APIError(404, 'User not found!');
  }
  return res.status(200).json(new APIResponse(200, student, 'User Profile'));
});

//logout student
const logoutStudent = asyncHandler(async (req, res) => {
  
  await Students.findByIdAndUpdate(
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

//allotment form

const applicationForAllotment = asyncHandler(async (req, res) => {
  const createdBy = req.user._id;
  console.log('createdBy: ', createdBy);
  const { result, emergencyContact,emergencyPerson,expectedDate,details} = req.body;
  if (
    [result, emergencyContact,emergencyPerson,expectedDate,details].some(field => {
      field?.trim() === '';
    })
  ) {
    throw new APIError(400, 'All field is required!!!');
  }
  const isExist = await Application.findOne({
    createdBy
  });

  if (isExist) {
    throw new APIError(
      409,
      'Application already exist! Try new one..'
    );
  }
  const imagePath = req.files?.docs[0]?.path;
  if (!imagePath) {
    throw new APIError(400, 'Docs is required and path!');
  }

  const docs = await uploadCloudinary(imagePath);
  if (!docs) {
    throw new APIError(400, 'Docs is required!');
  }
  console.log('application: ', req.body);
  const application = await Application.create ({
    result,
    emergencyContact,
    emergencyPerson,
    expectedDate,
    docs: docs?.url || '',
    details,
    createdBy
  });

  const createdApplication = await Application.findById(application._id).select(
    '-createdBy'
  );
  
  if (!createdApplication) {
    throw new APIError(500, 'Somthing is Wrong!');
  }

  return res
    .status(201)
    .json(new APIResponse(200, createdApplication, 'Application Submitted Successfully'));

}
)

//complain

const complain = asyncHandler(async (req, res) => {
  const createdBy = req.user._id;
  console.log('createdBy: ', createdBy);
  const { subject, description} = req.body;
  if (
    [subject, description].some(field => {
      field?.trim() === '';
    })
  ) {
    throw new APIError(400, 'All field is required!!!');
  }
  console.log('complain: ', req.body);
  const complain = await Complain.create ({
    subject,
    description,
    createdBy
  });

  const createdComplain = await Complain.findById(complain._id).select('-createdBy');
  
  if (!createdComplain) {
    throw new APIError(500, 'Somthing is Wrong!');
  }

  return res
    .status(201)
    .json(new APIResponse(200, createdComplain, 'Complain Submitted Successfully'));

}
)

//return merge value of two collections



export { registerStudents, loginStudent, logoutStudent,getProfile,applicationForAllotment,complain };
