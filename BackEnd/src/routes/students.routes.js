//import {Router} from 'express';
const {Router}= require( 'express');
//import { registerStudents } from '../controller/students.controller';
const {registerStudents} =require('../controller/students.controller');
const router= Router();
const {upload} = require('../middlewares/multer.middlewares.js');

router.route('/registration').post(
            upload.fields([
                {
                    name:'avatar',
                    maxCount:1
                }
            ])
            
            
            ,registerStudents);
//router.route('/login').post(login)
//export default router;
module.exports=router;