import { CreateShortenerController } from "../../controllers/create-shortener-controller";
import { DeleteShortenerController } from "../../controllers/delete-shortener-controller";
import { createShortenerUseCase, deleteShortenerUseCase } from "./usecases";

export const deleteShortenerController = new DeleteShortenerController(deleteShortenerUseCase)
export const createShortenerController = new CreateShortenerController(createShortenerUseCase)