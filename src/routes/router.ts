import {Request, Response} from 'express';
import express from 'express';
import { UserController } from '../controllers/user/userController';
import { AuthUserController } from '../controllers/auth/authUserController';

const router = express.Router();

router.get('/' , (request:Request, response:Response ) => {
    response.send("Hello World");
});

router.post('/user', new UserController().create);

router.post('/auth', new AuthUserController().authenticate);

export {router};