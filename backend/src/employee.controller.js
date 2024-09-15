import {Employee} from './employee.model.js';
import { uploadCloudinary } from './cloudinary.js';

const addEmployee = async (req, res) => {
    const { name, email, phone, dob } = req.body;
    if ([name, email, phone, dob].some(field => field?.trim() === '')) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const isExist = await Employee.findOne({ $or:[{email},{phone}] });
    if(isExist) return res.status(409).json({ message: 'User with email or phone already exist! Try new one..' });

    const imagePath = req.files?.avatar[0]?.path;
    if (!imagePath) return res.status(400).json({ message: 'Avatar is required and path!' });

    const avatar = await uploadCloudinary(imagePath);
    if (!avatar) return res.status(400).json({ message: 'Avatar is required!' });

    const employee = await Employee.create({
        name,
        email,
        phone,
        dob,
        avatar: avatar?.url || '',
    });

};


const editEmployee= async (req,res,next)=>{
    let Id =req.body.id;
    let updateData = {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        dob:req.body.dob

    };
    const imagePath = req.files?.avatar[0]?.path;
    if (imagePath) {

        const avatar = await uploadCloudinary(imagePath);
        updateData.avatar = avatar?.url || '';
    }
    Employee.findByIdAndUpdate(Id,{$set:updateData})
    .then((employee)=>{
        res.status(200).json(employee);
    })
    .catch((error)=>{
        res.status(500).json({
            message:error
        })
    })
};

const show=(req,res,next)=>{
    const email = req.body.email;
    Employee.findOne({ $or:[{email}]} )
    .then((employee)=>{
        res.status(200).json(employee);
    })
    .catch((error)=>{
        res.status(500).json({
            message:error
        })
    })
};


const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const  deleteEmployee = async (req, res) => {
    let mail =req.body.email;
    Employee.findOneAndDelete(mail)
    .then((employee)=>{
        res.status(200).json(employee);
    })
    .catch((error)=>{
        res.status(500).json({
            message: error
        })
    })
};

export default { addEmployee, getEmployees, editEmployee, deleteEmployee,show };
