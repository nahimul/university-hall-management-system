import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('File: ',file);
        return cb(null, 'public');
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        console.log("File extension: ",ext);
        return cb(null, Date.now()+ext);
    }
});
 
const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'  || file.mimetype === 'image/png'){
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