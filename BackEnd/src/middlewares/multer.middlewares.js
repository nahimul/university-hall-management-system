// import multer from 'multer';
// const storege = multer.diskStorage({
//     destination:function(req,file,cb){
//         console.log(file);
//         return cb(null,'public');
//     },
//     filename: function(req,file ,cb){
//         console.log(file.originalname);
//         return cb(null, `${Date.now()}_${file.originalname}`)
//     }
// });
// const upload= multer({storege,});
// //console.log(upload);

// export {upload};

import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, 'public');
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        return cb(null, Date.now()+ext);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'  || file.mimetype === 'image/png' || file.mimetype === 'application/pdf'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

export {upload};