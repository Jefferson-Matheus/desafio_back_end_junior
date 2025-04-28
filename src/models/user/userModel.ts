import postgresClient from "../../connection/connection";
import {hash} from 'bcrypt';

class UserModel{
    async createUser(userName:string,email:string,password:string){
        const connection = await postgresClient.connect();

        try {
            const hashedPassword = await hash(password,5);

            const query = {
                text: 'INSERT INTO users (userName,email,userPassword) values ($1,$2,$3) RETURNING *',
    
                values:[userName,email,hashedPassword]
            }

            const userResult = await connection.query(query);
            
            const userCreated = userResult.rows[0];

            return userCreated;

        } catch (error) {
            console.log(error);
            throw new Error("Error");
        }
    }
}

export {UserModel};