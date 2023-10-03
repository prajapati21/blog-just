const multer = require("multer");
//upload files
const storage = multer.diskStorage({
    destination : (request,fileInfo,callback)=>{
        callback(null,"storage/images")
    },
    filename : (request,fileInfo,callback)=>{
        callback(null,fileInfo.originalname);
    }
});
const multipart = multer({
    storage : storage
}).single("file")

module.exports = multipart;