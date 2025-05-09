import {sign} from 'jsonwebtoken';
import postgresClient from '../connection/connection';
import dotenv from 'dotenv';
import {compare} from 'bcrypt';


dotenv.config();


class AuthUser{
    async authenticate(email:string, password: string){
        if(!email || !password){
            return {message: "All Filds Are Required"}
        }

        const connection = await postgresClient.connect();

        const query = {
            text: 'SELECT * FROM users WHERE email = $1',

            values:[email]
        }

        try {
            const user = await connection.query(query);

            if(user.rows.length == 0){

                return {message: "Email Or Password Are Incorrects Or User Do Not Exists."}
                
            }

            const ispasswordCorrect = await compare(password,user.rows[0].userpassword);

            if(!ispasswordCorrect){
                return {message: "Password is Incorrect"};
            }

            const secret = process.env.JWT_SECRET || 'secret';

            const token = sign({
                userName: user.rows[0].username,
                email: email },
                secret,
                {expiresIn: '1d'}
            );

            console.log(token);

            return {currentUser: user.rows[0], jwtToken: token};

        } catch (error) {
            console.log(error)
            throw new Error("Error");
        }finally{
            connection.release();
        }
    }
}

export {AuthUser};