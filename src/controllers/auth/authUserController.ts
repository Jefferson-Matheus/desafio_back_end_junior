import { Request, Response } from "express";
import { AuthUser } from "../../auth/authUser";


class AuthUserController{
    async authenticate(request: Request, response: Response): Promise<any>{
        const loginData = request.body;

        const authUser = new AuthUser();

        try{

        const user = await authUser.authenticate(loginData.email,loginData.password);

        if(user.message){
           return response.status(400).json(user);
        }

        return response.json(user);

        }catch(error){
            throw new Error(`Error: ${error}`);
        }
    }
}

export {AuthUserController};