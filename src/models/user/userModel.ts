import postgresClient from "../../connection/connection";

class UserModel{
    async createUser(userName:string,email:string,password:string){
        const connection = await postgresClient.connect();

        const query = {
            text: 'INSERT INTO users (userName,email,userPassword) values ($1,$2,$3) RETURNING *',

            values:[userName,email,password]
        }

        try {
            const metaUser = await connection.query(query);
            
            const userCreated = metaUser.rows;

            return userCreated;

        } catch (error) {
            console.log(error);
        }
    }
}

export {UserModel};