import { CreateShortenerUseCase } from "../../usecases/create-shortener-usecase";
import { DeleteShortenerUseCase } from "../../usecases/delete-shortener-usecase";
import { inMemoryShortenerRepository } from "./repositories";

export const deleteShortenerUseCase = new DeleteShortenerUseCase(inMemoryShortenerRepository)
export const createShortenerUseCase = new CreateShortenerUseCase(inMemoryShortenerRepository)