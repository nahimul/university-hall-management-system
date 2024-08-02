const multer=require('multer');

const storege = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/temporary")
        console.log(file);
    },
    filename: function(req,file ,cb){
        cb(null, file.originalname)
        console.log(file.originalname);
    }
});
const upload= multer({storege,});
console.log(upload);

module.exports ={upload};