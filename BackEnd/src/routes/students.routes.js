import {Router} from 'express';
import { registerStudents,loginStudent,logoutStudent } from '../controller/students.controller.js';
import {upload} from '../middlewares/multer.middlewares.js';

const router= Router();
router.route('/registration').post(
            upload.fields([
                {
                    name:'avatar',
                    maxCount:1
                }
            ])
            
            
            ,registerStudents);
router.route('/login').post(loginStudent);
router.route('/logout').post(logoutStudent);
//router.route('/login').post(login)
export default router;
