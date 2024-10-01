import { Router }from 'express';
import {addNotice , getNotice, deleteNotice } from '../controller/notices.controller.js';
import {upload} from '../middlewares/multer.middlewares.js';
const router = Router();

router.route('/add').post(
    upload.fields 
    ([
        {
            name:'upFile',
            maxCount:1
        }
    ])
    ,addNotice);
router.route('/get').get(getNotice);
router.route('/get/:id').get(getNotice);
router.route('/delete/:id').delete(deleteNotice);

export default router;