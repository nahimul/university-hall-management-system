import mongoose from 'mongoose';    

import { Students } from './students.models.js';
 
const applicationSchema= new mongoose.Schema({
   result:{
        type:String,
        required:true
    },
    emergencyPerson:{
        type:String,
        required:true
    },
    emergencyContact:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    expectedDate:{
        type:String,
        required:true
    },
    docs:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }
},{timestamps:true});

applicationSchema.statics.getMergedApplications = async function () {
    try {
      const mergedApplications = await this.aggregate([
        {
          // Match all documents in the Application collection
          $match: {}
        },
        {
          // Perform a lookup to join with the Student collection
          $lookup: {
            from: 'students', // Collection name of the Student model (lowercase of model name)
            localField: 'createdBy', // Field in Application referencing Student
            foreignField: '_id', // Field in Student collection (usually _id)
            as: 'student' // Output array field to store matched student documents
          }
        },
        {
          // Unwind the student array (since we expect only one matching student per application)
          $unwind: {
            path: '$student',
            preserveNullAndEmptyArrays: true // Optional: handle cases where there's no matching student
          }
        },
        {
          // Optionally project the specific fields you want to return
          $project: {
            _id: 1,
            result: 1,
            emergencyPerson: 1,
            emergencyContact: 1,
            details: 1,
            expectedDate: 1,
            docs: 1,
            'student._id': 1,
            'student.name': 1,
            'student.department': 1,
            'student.session': 1,
            'student.roll': 1,
            'student.registration': 1,
            'student.mobile': 1,
            'student.resident': 1,
            'student.email': 1,
            'student.avatar': 1,
          }
        }
      ]);
  
      return mergedApplications;
    } catch (error) {
      throw new Error('Error fetching merged application data: ' + error.message);
    }
  };

export const Application= mongoose.model('Application',applicationSchema);