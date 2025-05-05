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

        const movieList = await movieModel.listAll();

        return response.status(200).json(movieList);
    }

    async listAllMoviesSorted(request:Request, response: Response): Promise<any>{
        
        const movieModel = new MovieModel();

        const movieListSorted = await movieModel.sortAll();

        return response.status(200).json(movieListSorted);
    }

    async listAllMoviesByPagination(request:Request, response: Response): Promise<any>{

        const pageId = Number(request.query.id);
        
        const movieModel = new MovieModel();

        const movieListAfterPagination = await movieModel.paginationMovies(pageId);

        return response.status(200).json(movieListAfterPagination);
    }
}

export {MovieController};