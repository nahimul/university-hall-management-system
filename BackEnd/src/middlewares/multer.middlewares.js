import multer from 'multer';

const storege = multer.diskStorage({
    destination:function(req,file,cb){
        console.log(file);
        return cb(null,"./public/temporary")
    },
    filename: function(req,file ,cb){
        console.log(file.originalname);
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
});
const upload= multer({storege,});
console.log(upload);

export {upload};