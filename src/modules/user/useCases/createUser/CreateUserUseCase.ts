import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../error/AppError";

export class CreateUserUseCase {
   async execute({ name, email }: CreateUserDTO): Promise<User> {
      // TODO: Pegando o email no banco
      const userAlreadyExists = await prisma.user.findUnique({
         where: {
            email,
         },
      });

      // TODO: Validação se usuário já existe
      if (userAlreadyExists) {
         throw new AppError("User already exists!");
      }

      // TODO: Criar usuário
      const user = await prisma.user.create({
         data: {
            name,
            email,
         },
      });

      return user;
   }
}
