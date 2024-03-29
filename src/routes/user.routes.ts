import { Router } from "express";
import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController";

const createUserController = new CreateUserController();
const userRoutes = Router();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
