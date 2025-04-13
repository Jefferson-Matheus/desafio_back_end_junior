import postgresClient from "../../connection/connection";
import { UserModel } from "../../models/user/userModel";

class UserService{
    async execute({userName,email,userPassword}: UserModel){
        await postgresClient.connect();

        const userData = await postgresClient.query(`INSERT INTO users (userName, email, userPassword) VALUES ($1,$2,$3)`, [userName,email,userPassword]);

        return userData;
    }
}

export {UserService};