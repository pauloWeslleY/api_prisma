import { Movie } from "@prisma/client";
import { CreateMoviesDTO } from "../../dtos/CreateMoviesDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../error/AppError";

export class CreateMovieUseCase {
   async execute({title, duration, release_date}: CreateMoviesDTO): Promise<Movie> {

      // TODO: Verificar se o filme já existe
      const movieAlreadyExists = await prisma.movie.findUnique({
         where: {
            title,
         }
      })

      if (movieAlreadyExists) {
         throw new AppError("Movie already exists!");
      }

      // TODO: Criar filmes
      const movie = await prisma.movie.create({
         data: {
            title,
            duration,
            release_date,
         }
      });


      return movie;
   }
}