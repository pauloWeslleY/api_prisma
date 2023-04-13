import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import { AppError } from "./error/AppError";

const app = express();

app.listen(3333, () => console.log("Server is running in port 3333 🚀"));

app.use(express.json());
app.use(routes);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
   if (err instanceof AppError) {
      return response.status(err.statusCode).json({
         status: "err",
         message: err.message
      });
   }

   return response.status(500).json({
      status: "err",
      message: `Internal server error - ${err.message}`
   });
});