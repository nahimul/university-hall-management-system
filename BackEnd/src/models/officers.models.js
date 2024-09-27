import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const officersSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      trim: true, 
      required: true 
    },
    possition: { 
      type: String, 
      trim: true, 
      required: true 
    },
    id_no: { 
      type: String, 
      trim: true, 
      required: true 
    },
    registration: { 
      type: String, 
      trim: true, 
    },
    mobile: { 
      type: String, 
      trim: true, 
      required: true 
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: { 
      type: String, 
      trim: true, 
      required: true 
    },
    user:{
      type:String,
      default:'officer',
    },
    avatar: {
      type: String, //cloudinary url
      required: true,
    },
  },
  { timeseries: true }
);
officersSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } else {
    next();
  }
});

officersSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

officersSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      roll: this.roll,
      name: this.name,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
officersSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
    );
};

export const Officers = mongoose.model('Officers', officersSchema);
