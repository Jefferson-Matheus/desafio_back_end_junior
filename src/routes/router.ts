import {Request, Response} from 'express';
import express from 'express';
import { UserController } from '../controllers/user/userController';
import { AuthUserController } from '../controllers/auth/authUserController';
import { MovieController } from '../controllers/movie/movieController';
import multerConfig from '../multer/multer';

import multer from 'multer'

const router = express.Router();

const upload = multer(multerConfig.upload('uploads'));


router.get('/' , (request:Request, response:Response ) => {
    response.send("Hello World");
});

router.post('/user', new UserController().create);

router.post('/auth', new AuthUserController().authenticate);

router.post('/movie',upload.single('banner'), new MovieController().createMovie);

export {router};