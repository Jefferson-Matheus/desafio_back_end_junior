import postgresClient from "../../connection/connection";


class MovieModel{
    async createMovie(movieName:string, sinopse:string,banner:string, releaseDate: Date){
        const connection = await postgresClient.connect();
        if(!movieName || !sinopse || !banner || !releaseDate){
            return {message: "All Filds Are Required"}
        }

        try{
            const query = {
                text: 'INSERT INTO movies (movieName,sinopse,banner,releasedate) values ($1,$2,$3,$4) RETURNING *',
    
                values:[movieName,sinopse,banner,releaseDate]
            }

            const movieResult = await connection.query(query);

            const movieCreated = movieResult.rows[0];

            return movieCreated;

        }catch(error){

            throw error;

        }finally{

            connection.release();
        }
    }

    async listAll(){
        const connection = await postgresClient.connect();

        try{
            const query = {
                text: 'SELECT * FROM movies',
            }

            const movieResult = await connection.query(query);

            const movieList = movieResult.rows;

            return movieList;

        }catch(error){

            throw error;

        }finally{

            connection.release();
        }
    }

    async sortAll(){
        const connection = await postgresClient.connect();

        try{
            const query = {
                text: 'SELECT * FROM movies ORDER BY releasedate',
            }

            const movieResult = await connection.query(query);

            const movieListSorted = movieResult.rows;

            return movieListSorted;

        }catch(error){

            throw error

        }finally{

            connection.release();
        }
    }

    async paginationMovies(pageId: number){

        const limit = 10;

        let offset = limit * pageId;

        const connection = await postgresClient.connect();

        try{
            const query = {
                text: `SELECT * FROM movies LIMIT ${limit} OFFSET ${offset} `,
            }

            const movieResult = await connection.query(query);

            const movieListAfterPagination = movieResult.rows;

            return movieListAfterPagination;

        }catch(error){
            console.log(error);
        }
    }
}

export {MovieModel};