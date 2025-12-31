
import mongoose from "mongoose";
import multer from "multer";
import AppError from "./AppError.js";


const uploadFile = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, new mongoose.Types.ObjectId() + "-" + file.originalname);
    },
  });


  
function fileFilter (req, file, cb) {
  if(file.mimetype.startsWith('image')) {
    cb(null, true);
  }else{
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
}

  const upload = multer({ storage: storage ,fileFilter});
  return upload;
};



export const uploadSignal =(fieldName)=>uploadFile().single(fieldName);
export const uploadArray = (fieldName)=>uploadFile().array(fieldName,10);
export const upoadFildes =(fieldName)=>uploadFile().fields(fieldName);