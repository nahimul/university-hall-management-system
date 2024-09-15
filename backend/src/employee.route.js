import { Router } from "express";
import controller from "./employee.controller.js";
import {upload} from './multe.middileware.js'

const router = Router();

router.route("/").get(controller.getEmployees);
router.route("/add").post( 
    upload.fields([
        {
            name:'avatar',
            maxCount:1,
            limits:{fileSize: 200*300*2}
        }
    ])
        ,  controller.addEmployee);

router.route("/edit").patch(controller.editEmployee);
router.route("/delete").post(controller.deleteEmployee);
router.route("/show").post(controller.show);

export default router;