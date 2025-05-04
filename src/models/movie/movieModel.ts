import postgresClient from "../../connection/connection";


class MovieModel{
    async createMovie(movieName:string, sinopse:string,banner:string, releaseDate: Date){
        const connection = await postgresClient.connect();

        try{
            const query = {
                text: 'INSERT INTO movies (movieName,sinopse,banner,releasedate) values ($1,$2,$3,$4) RETURNING *',
    
                values:[movieName,sinopse,banner,releaseDate]
            }

            const movieResult = await connection.query(query);

            const movieCreated = movieResult.rows[0];

            return movieCreated;
        }catch(error){
            console.log(error);
            throw new Error("Error");
        }finally{
            postgresClient.end();
        }
    }
}