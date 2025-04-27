import { Request, Response } from "express";
import { AuthUser } from "../../auth/authUser";


class AuthUserController{
    async authenticate(request: Request, response: Response): Promise<any>{
        const loginData = request.body;

        const authUser = new AuthUser();

        const user = await authUser.authenticate(loginData.email,loginData.password);

        response.json(user);
    }
}

export {AuthUserController};