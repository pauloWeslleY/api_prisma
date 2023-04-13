import { Router } from 'express';
import { CreateMovieUseController } from './../modules/movies/useCases/createMovie/CreateMovieUseController';

const createMovieUseController = new CreateMovieUseController();
const movieRoutes = Router();
movieRoutes.post("/", createMovieUseController.handle);
export { movieRoutes };