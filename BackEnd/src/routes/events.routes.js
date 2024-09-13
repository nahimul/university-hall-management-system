import { Router } from "express";
import { addEvent, getEvents } from "../controller/events.controller.js";
import { upload } from '../middlewares/multer.middlewares.js';
const router = Router();
router.route('/add').post(
    upload.fields([
        {
            name:'images',
            maxCount:2
        }
    ]),
    addEvent);
router.route('/get').get(getEvents);

export default router;