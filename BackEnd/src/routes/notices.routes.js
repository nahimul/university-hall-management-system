import { Router }from 'express';
import {addNotice} from '../controller/notices.controller.js';

const router = Router();

router.route('/addnotice').post(addNotice);

export default router;