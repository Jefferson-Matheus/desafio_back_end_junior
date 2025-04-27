import {sign} from 'jsonwebtoken';
import postgresClient from '../connection/connection';
import dotenv from 'dotenv';

dotenv.config();


class AuthUser{
    async authenticate(email:string, password: string){
        if(!email || !password){
            return {message: "All Field Are Requireds"};
        }

        const connection = await postgresClient.connect();

        const query = {
            text: 'SELECT * FROM users WHERE email = $1 AND userpassword = $2',

            values:[email,password]
        }

        try {
            const user = await connection.query(query);

            if(user.rows.length == 0){
                return {message: "Email Or Password Are Incorrects Or User Do Not Exists"};
            }

            const username = user.rows[0].username;
            
            const email = user.rows[0].email;

            const password = user.rows[0].userpassword;

            const secret = process.env.JWT_SECRET || 'secret';

            const token = sign({
                username: username, 
                emailUser: email, 
                userPassword: password},secret, {expiresIn: '1d'}
            );

            console.log(token);

            return {jwtToken:token, user: user.rows};

        } catch (error) {
            console.log(error)
        }
    }
}

export {AuthUser};