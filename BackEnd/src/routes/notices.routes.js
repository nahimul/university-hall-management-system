import { Router }from 'express';
import {addNotice , getNotice } from '../controller/notices.controller.js';
import {upload} from '../middlewares/multer.middlewares.js';
const router = Router();

router.route('/addnotice').post(
    upload.fields 
    ([
        {
            name:'upFile',
            maxCount:1
        }
    ])
    ,addNotice);
router.route('/getnotice').get(getNotice);

export default router;