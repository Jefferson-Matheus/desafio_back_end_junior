import postgresClient from "../../connection/connection";
import { UserModel } from "../../models/user/userModel";
import {hash} from 'bcrypt';

class UserService{
    async execute({userName,email,userPassword}: UserModel){
        await postgresClient.connect();

        const userPasswordHashed = await hash(userPassword,5);

        const userData = await postgresClient.query(`INSERT INTO users (userName, email, userPassword) VALUES ($1,$2,$3)`, [userName,email,userPasswordHashed]);

        return userData;
    }
}

export {UserService};