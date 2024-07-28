import mongoose from 'mongoose';

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
    image: {
      type: String, //cloudinary url
      required: true,
    },
  },
  { timeseries: true }
);

export const Officers = mongoose.model('Officers', officersSchema);
