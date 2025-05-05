import {Request, Response} from 'express';
import express from 'express';
import { UserController } from '../controllers/user/userController';
import { AuthUserController } from '../controllers/auth/authUserController';
import { MovieController } from '../controllers/movie/movieController';
import multerConfig from '../multer/multer';
import { IsAuthenticated } from '../middlewares/isAuthenticated';

import multer from 'multer'

const router = express.Router();

const upload = multer(multerConfig.upload('uploads'));

const isAuthenticatedMiddleware = new IsAuthenticated();


router.get('/' , (request:Request, response:Response ) => {
    response.send("Hello World");
});

router.post('/user', new UserController().create);

router.post('/auth', new AuthUserController().authenticate);

router.post('/movie',isAuthenticatedMiddleware.middleware,upload.single('banner'), new MovieController().createMovie);

router.get('/movies' ,isAuthenticatedMiddleware.middleware,new MovieController().listAllMovies);

router.get('/movies/sorted' ,isAuthenticatedMiddleware.middleware,new MovieController().listAllMoviesSorted);

router.get('/movies/page/:id' ,isAuthenticatedMiddleware.middleware,new MovieController().listAllMoviesByPagination);

export {router};