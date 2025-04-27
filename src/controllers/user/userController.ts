import {Request, response, Response} from 'express';

import { UserModel } from '../../models/user/userModel';

class UserController{
    async create(request:Request, response:Response): Promise<any>{
        const userData = request.body;

        const userModel = new UserModel();

        const userCreated = await userModel.createUser(userData.userName,userData.email,userData.password);

        return response.status(201).json(userCreated);
    }

}

export {UserController};