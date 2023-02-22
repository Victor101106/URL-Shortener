import { CreateShortenerController } from "../../controllers/create-shortener-controller";
import { createShortenerUseCase } from "./usecases";

export const createShortenerController = new CreateShortenerController(createShortenerUseCase)