import {Request,Response,NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class IsAuthenticated{
    async middleware(request: Request, response: Response, next: NextFunction):Promise<any>{
        const authToken = request.headers.authorization;


        console.log(authToken);

        if (!authToken) {
            return response.status(401).end();
        }

        const [,token] = authToken.split(' ');


        try {
            const { sub } =  verify(token, process.env.JWT_SECRET || 'secret');
        

            return next();
          }catch (error) {
            return response.status(401).end();
          }
    }
}

export {IsAuthenticated};