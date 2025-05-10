import {Request, response, Response} from 'express';

import { UserModel } from '../../models/user/userModel';

class UserController{
    async create(request:Request, response:Response): Promise<any>{
        const userData = request.body;

        const userModel = new UserModel();

        try{

            const userCreated = await userModel.createUser(userData.userName,userData.email,userData.password);

            if(userCreated.message){

                return response.status(400).json(userCreated);
            }

            return response.status(201).json(userCreated);

        }catch(error){
            throw error;
        }


    }

}

export {UserController};