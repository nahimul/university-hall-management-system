const{ Router }= require('express');
const {addNotice} = require('../controller/notices.controller.js');

const router = Router();

router.route('/addnotice').post(addNotice);

module.exports = router;