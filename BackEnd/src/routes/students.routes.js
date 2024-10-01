import {Router} from 'express';
import { registerStudents,loginStudent,logoutStudent,getProfile,applicationForAllotment,complain } from '../controller/students.controller.js';
import {upload} from '../middlewares/multer.middlewares.js';
import {verifyJWT} from '../middlewares/auth.middlewares.js';

const router= Router();

router.route('/registration').post(
            upload.fields(
                [
                    {name:'avatar',maxCount:1},
                ]   
            ), registerStudents);
            
router.route('/login').post(loginStudent);
router.route('/logout').post(verifyJWT,logoutStudent);
router.route('/profile').get(verifyJWT,getProfile);
router.route('/allotmentform').post(verifyJWT,upload.fields([{name:'docs',maxCount:1}]),applicationForAllotment);
router.route('/complain').post(verifyJWT,complain);
//router.route('/login').post(login)
export default router;
