//import mongoose from 'mongoose';
const mongoose =require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
    department: {
      type: String,
      trim: true,
      required: true,
    },
    session: {
      type: String,
      trim: true,
      required: true,
    },
    roll: {
      type: String,
      trim: true,
      required: true,
    },
    registration: {
      type: String,
      trim: true,
      required: true,
    },
    mobile: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
      trim: true,
      required: [true, 'Password is required'],
    },
    image: {
      type: String, //cloudinary url
      required: true,
    },
  },
  { timeseries: true }
);

studentSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } else {
    next();
  }
});

studentSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

studentSchema.methods.generateAccessToken = function () {
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
studentSchema.methods.generateRefreshToken = function () {
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

const Student = mongoose.model('Student', studentSchema);
module.exports=Student;