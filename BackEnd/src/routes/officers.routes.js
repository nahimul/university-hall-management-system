import { Router } from "express";
import { offiersRegistration, loginOfficers,logoutOfficers } from "../controller/officers.controller.js";
import {upload} from '../middlewares/multer.middlewares.js';

const router = Router();
router.route('/registration').post(
    upload.fields([
        {
            name:'avatar',
            maxCount:1
        }
    ])
    
    
    ,offiersRegistration);
router.route('/login').post(loginOfficers);
router.route('/logout').post(logoutOfficers);

export default router;
