const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    department: String,
    session: String,
    roll: String,
    registration: String,
    phone: String,
    email: String,
    password: String,
});

const StudentModel = mongoose.model('Student', studentSchema);
module.exports = StudentModel;