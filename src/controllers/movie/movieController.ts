import {Request, Response} from 'express';
import { MovieModel } from '../../models/movie/movieModel';


class MovieController{
    async createMovie(request:Request, response: Response): Promise<any>{
        console.log('Corpo da requisição:', request.body);
        
        const movie = request.body;

        const movieModel = new MovieModel();

        const banner: string | any = request.file?.filename;

        const movieCreated = await movieModel.createMovie(movie.moviename,movie.sinopse,banner,movie.releaseDate);

        return response.status(200).json(movieCreated);
    }

    async listAllMovies(request:Request, response: Response): Promise<any>{
        
        const movieModel = new MovieModel();

        const movieCreated = await movieModel.listAll();

        return response.status(200).json(movieCreated);
    }
}

export {MovieController};