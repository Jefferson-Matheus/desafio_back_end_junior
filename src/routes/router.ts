import {Request, Response} from 'express';
import express from 'express';
import { UserController } from '../controllers/user/userController';

const router = express.Router();

router.get('/' , (request:Request, response:Response ) => {
    response.send("Hello World");
});

router.post('/user', new UserController().create);

export {router};