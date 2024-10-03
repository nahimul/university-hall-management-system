import { Router } from "express";
import { officerRegistration, loginOfficers,logoutOfficers, getRequestedStudent,getRequestByID } from "../controller/officers.controller.js";
import {upload} from '../middlewares/multer.middlewares.js';
import { verifyJWT } from '../middlewares/auth.middlewares.js';

const router = Router();
router.route('/registration').post(
    upload.fields([
        {
            name:'avatar',
            maxCount:1
        }
    ])
    
    
    ,officerRegistration);
router.route('/login').post(loginOfficers);
router.route('/logout').post(verifyJWT,logoutOfficers);
router.route('/requested').get(getRequestedStudent )
router.route('/request/:id').get(getRequestByID)

export default router;
