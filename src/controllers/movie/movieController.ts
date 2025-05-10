import { Request, Response } from 'express';
import { MovieModel } from '../../models/movie/movieModel';


class MovieController {
    async createMovie(request: Request, response: Response): Promise<any> {
        const movie = request.body;

        const movieModel = new MovieModel();

        const banner: string | any = request.file?.filename;

        try {
            const movieCreated = await movieModel.createMovie(movie.moviename, movie.sinopse, banner, movie.releaseDate);

            if (movieCreated.message) {
                
                return response.status(400).json(movieCreated);
            }

            return response.status(201).json(movieCreated);

        } catch (error) {
            throw error;
        }

    }

    async listAllMovies(request: Request, response: Response): Promise<any> {

        const movieModel = new MovieModel();

        try {

            const movieList = await movieModel.listAll();

            return response.status(200).json(movieList);

        } catch (error) {
            throw error;
        }


    }

    async listAllMoviesSorted(request: Request, response: Response): Promise<any> {

        const movieModel = new MovieModel();

        try {

            const movieListSorted = await movieModel.sortAll();

            return response.status(200).json(movieListSorted);

        } catch (error) {
            throw error;
        }


    }

    async listAllMoviesByPagination(request: Request, response: Response): Promise<any> {

        const pageId = parseInt(request.params.id as string);

        console.log(request.params.id);

        const movieModel = new MovieModel();

        try {
            const movieListAfterPagination = await movieModel.paginationMovies(pageId);

            return response.status(200).json(movieListAfterPagination);

        }catch(error){
            
            throw error
        }


    }
}

export { MovieController };