import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (request:Request, responde: Response) => {
    responde.send("Hello Wolrd");
});


export {router};