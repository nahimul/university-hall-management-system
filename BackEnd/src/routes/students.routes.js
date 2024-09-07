import {Router} from 'express';
import { registerStudents } from '../controller/students.controller.js';
const router= Router();
import {upload} from '../middlewares/multer.middlewares.js';

router.route('/registration').post(
            upload.fields([
                {
                    name:'avatar',
                    maxCount:1
                }
            ])
            
            
            ,registerStudents);
//router.route('/login').post(login)
export default router;
