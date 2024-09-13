import { asyncHandler } from '../utls/asyncHandler.js';
import { Students } from '../models/students.models.js';
import { APIError } from '../utls/APIError.js';
import { APIResponse } from '../utls/APIResponse.js';
import { uploadCloudinary } from '../utls/cloudinary.js';
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
  const {token,refreshToken} = await generateTokens(student._id);
  const loggedInStudent = await Students.findById(student._id).select("-password -refreshToken");
  console.log(loggedInStudent);
  const options = {
    httpOnly: true,
    secure:true,
  }
 
  return res
  .status(200)
  .cookie("accessToken",token,options)
  .cookie("refreshToken",refreshToken,options)
  .json(new APIResponse(200, 
    { user: loggedInStudent, token, refreshToken }, 
    'Login Success'));
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
  .cookie("accessToken",options)
  .cookie("refreshToken",options)
  .json(new APIResponse(200, {}, 'Logout Success'));
});

export { registerStudents, loginStudent, logoutStudent };
