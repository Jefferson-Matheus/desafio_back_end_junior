import multer from 'multer';
import {resolve} from 'path'

export default {
    upload(folder:string){
        return {
            storage:multer.diskStorage({
                destination:resolve(__dirname,'..','..',folder),
                filename(req,file,cb){


                    const fileName = file.originalname
                    
                    return cb(null, fileName);
                }
            }),
        }
    }
}