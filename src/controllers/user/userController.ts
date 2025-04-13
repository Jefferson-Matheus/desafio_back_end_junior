import postgresClient from "../../connection/connection";
import {Request, Response} from 'express';
import { UserService } from "../../services/userServices/userService";

class UserController{
    async handle(request: Request, response:Response){
        const user = request.body;

        const userService = new UserService();

        const userCreated = userService.execute({...user});

        response.status(201).json(user);
        
    }
}

export {UserController};