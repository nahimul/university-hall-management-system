const multer =require('multer');

const storege = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/temporary")
    },
    filename: function(req,file ,cb){
        cb(null, file.originalname)
    }
});
const upload= multer({storege,});
mudule.exports =upload;