import {Router, Request, Response} from 'express';
import { UserController } from '../controllers/user/userController';

const router = Router();

router.get('/', (request:Request, responde: Response) => {
    responde.send("Hello Wolrd");
});

router.post('/user', new UserController().handle);


export {router};