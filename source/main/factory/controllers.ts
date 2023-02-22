import { CreateShortenerController } from "../../controllers/create-shortener-controller";
import { DeleteShortenerController } from "../../controllers/delete-shortener-controller";
import { GetShortenerController } from "../../controllers/get-shortener-controller";
import { createShortenerUseCase, deleteShortenerUseCase, getShortenerUseCase } from "./usecases";

export const deleteShortenerController = new DeleteShortenerController(deleteShortenerUseCase)
export const createShortenerController = new CreateShortenerController(createShortenerUseCase)
export const getShortenerController = new GetShortenerController(getShortenerUseCase)